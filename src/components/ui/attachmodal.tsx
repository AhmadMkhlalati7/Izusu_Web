import { useCallback, useState } from "react";
import axios, { CancelTokenSource } from "axios";
import { t } from "i18next";
import { Eye, FileImage, FolderArchive, UploadCloud, X } from "lucide-react";
import { DropzoneOptions, useDropzone } from "react-dropzone";
import { AiOutlineFilePdf } from "react-icons/ai";
import { RiFileExcel2Line } from "react-icons/ri";

import LoaderIcon from "@/components/icons/loader";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import ProgressBar from "@/components/ui/progress";
import { ScrollArea } from "@/components/ui/scroll-area";
import useAttachment from "@/hooks/useAttachment";
import { extractFilename } from "@/lib/helpers";
import { API_ENDPOINTS } from "@/lib/settings";

interface FileUploadProgress {
  progress: number;
  file: File;
  source: CancelTokenSource | null;
}

enum FileTypes {
  Image = "image",
  Pdf = "pdf",
  Xlsx = "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  Xls = "application/vnd.ms-excel",
  Other = "other",
}

const Attachmodal = () => {
  const isOpen = useAttachment((state) => state.isOpen);
  const onDeletedFile = useAttachment((state) => state.onDeletedFile);

  const closeModal = useAttachment((state) => state.onClose);
  const onFilesUploaded = useAttachment((state) => state.onFilesUploaded);
  const uploadedFiles = useAttachment((state) => state.uploadedFiles);
  const [filesToUpload, setFilesToUpload] = useState<FileUploadProgress[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setFilesToUpload((prevUploadProgress) => [
      ...prevUploadProgress,
      ...acceptedFiles.map((file) => ({
        progress: 0,
        file,
        source: axios.CancelToken.source(),
      })),
    ]);
    setError(null);
  }, []);

  const uploadImages = async () => {
    setLoading(true);
    const uploadPromises = filesToUpload.map((fileUploadProgress) => {
      const formData = new FormData();
      formData.append("files", fileUploadProgress.file);
      formData.append("upload_preset", state.USER_ID);

      return axios.post(
        `${import.meta.env.VITE_PUBLIC_API_URL + API_ENDPOINTS.UPLOADTOS3}`,
        formData,
        {
          cancelToken: fileUploadProgress.source?.token,
          onUploadProgress: (progressEvent) => {
            const progress = Math.round(
              (progressEvent.loaded * 100) / (progressEvent.total || 1), // Check if progressEvent.total is defined
            );

            setFilesToUpload((prevUploadProgress) =>
              prevUploadProgress.map((progressItem) =>
                progressItem.file === fileUploadProgress.file
                  ? { ...progressItem, progress }
                  : progressItem,
              ),
            );
          },
        },
      );
    });

    try {
      const responses = await Promise.all(uploadPromises);
      const successfulUploads = responses.flatMap((res) => res.data.filenames);
      onFilesUploaded(successfulUploads);
      setFilesToUpload([]);
      setLoading(false);
    } catch (uploadError) {
      if (uploadError instanceof Error) {
        setError(uploadError.message);
      } else {
        setError("An unknown error occurred during upload.");
      }
    }
  };

  const dropzoneOptions: DropzoneOptions = {
    onDrop,
    accept: {
      "image/*": [],
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [],
      "application/vnd.ms-excel": [".xls"],
    },
  };

  const { getRootProps, getInputProps, isDragActive } =
    useDropzone(dropzoneOptions);

  const uploadedImagesColor = (filePath: string) => {
    const fileExtension = filePath
      .substring(filePath.lastIndexOf(".") + 1)
      .toLowerCase();

    if (
      fileExtension.toLowerCase() === "png" ||
      fileExtension.toLowerCase() === "jpg" ||
      fileExtension.toLowerCase() === "jpeg"
    ) {
      return {
        icon: <FileImage size={25} className="fill-purple-600" />,
        color: "bg-purple-600",
      };
    }

    if (fileExtension.toLowerCase() === "pdf") {
      return {
        icon: <AiOutlineFilePdf size={25} className="fill-pink-400" />,
        color: "bg-blue-400",
      };
    }

    if (
      fileExtension.toLowerCase() === "xlsx" ||
      fileExtension.toLowerCase() === "xls"
    ) {
      return {
        icon: <RiFileExcel2Line size={22} className="fill-green-600" />,
        color: "bg-blue-400",
      };
    }

    // If the file extension is not recognized, return the default icon and color
    return {
      icon: <FolderArchive size={25} className="fill-green-400" />,
      color: "bg-black-400",
    };
  };

  const getFileIconAndColor = (file: File) => {
    if (file.type?.includes(FileTypes.Image)) {
      return {
        icon: <FileImage size={25} className="fill-purple-600" />,
        color: "bg-purple-600",
      };
    }
    if (file.type?.includes(FileTypes.Pdf)) {
      return {
        icon: <AiOutlineFilePdf size={25} className="fill-pink-400" />,
        color: "bg-blue-400",
      };
    }
    if (
      file.type?.includes(FileTypes.Xlsx) ||
      file.type?.includes(FileTypes.Xls)
    ) {
      return {
        icon: <RiFileExcel2Line size={22} className="fill-green-600" />,
        color: "bg-blue-400",
      };
    }
    return {
      icon: <FolderArchive size={25} className="fill-green-400" />,
      color: "bg-black-400",
    };
  };

  const removeFile = (file: File) => {
    setFilesToUpload((prevUploadProgress) =>
      prevUploadProgress.filter((item) => item.file !== file),
    );
  };

  const viewFile = (file: string) => {
    const fileUrl = `${import.meta.env.VITE_DOC_URL}${file}`;
    window.open(fileUrl, "_blank");
  };

  function deleteFile(file: string): void {
    console.log(file);
    console.log(uploadedFiles);

    onDeletedFile(file);
    console.log("updated", uploadedFiles);

    // throw new Error("Function not implemented.");
  }

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent
        className="sm:max-w-[425px]"
        onInteractOutside={(e) => {
          e.preventDefault();
        }}
      >
        <DialogHeader>
          <DialogTitle className="text-center">
            {t("Upload your files")}
          </DialogTitle>
        </DialogHeader>
        <div className="grid gap-2 py-4">
          <div>
            <label
              {...getRootProps()}
              className={`relative flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 py-6 hover:bg-gray-100 ${
                isDragActive ? "border-blue-500" : "border-gray-300"
              }`}
            >
              {error ? (
                <p className="text-red-500">{error}</p>
              ) : (
                <div className="text-center">
                  <div className="mx-auto max-w-min rounded-md border p-2">
                    <UploadCloud size={20} />
                  </div>
                  <p className="mt-2 text-sm text-gray-600">
                    <span className="font-semibold">{t("Drag files")}</span>
                  </p>
                  <p className="text-xs text-gray-500">
                    {t("Click to upload files")} ( Max File: 10, Size: 5MB )
                  </p>
                </div>
              )}
            </label>
            <Input
              {...getInputProps()}
              id="dropzone-file"
              type="file"
              className="hidden"
            />
          </div>

          {filesToUpload.length > 0 && (
            <div>
              <p className="my-2 text-xs font-medium">{t("Files to upload")}</p>
              <ScrollArea className="h-40">
                <div className="space-y-2 pr-3">
                  {filesToUpload.map((fileUploadProgress) => (
                    <div
                      key={fileUploadProgress.file.lastModified}
                      className="group flex justify-between gap-2 overflow-hidden rounded-lg border border-slate-100 pr-2 hover:pr-0"
                    >
                      <div className="flex flex-1 items-center p-2">
                        <div className="text-white">
                          {getFileIconAndColor(fileUploadProgress.file).icon}
                        </div>
                        <div className="ml-2 w-full space-y-1">
                          <div className="flex justify-between text-xs">
                            <p className="w-52 truncate text-ellipsis">
                              {fileUploadProgress.file.name.slice(0, 25)}
                            </p>
                            <span className="text-xs">
                              {fileUploadProgress.progress}%
                            </span>
                          </div>
                          <ProgressBar
                            progress={fileUploadProgress.progress}
                            className={
                              getFileIconAndColor(fileUploadProgress.file).color
                            }
                          />
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          if (fileUploadProgress.source) {
                            fileUploadProgress.source.cancel(
                              "Upload cancelled",
                            );
                          }
                          removeFile(fileUploadProgress.file);
                        }}
                        className="hidden cursor-pointer items-center justify-center bg-red-500 px-2 text-white transition-all group-hover:flex"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          )}

          {uploadedFiles.length > 0 && (
            <div>
              <p className="my-2 text-xs font-medium"> {t("Uploaded Files")}</p>
              <ScrollArea className="h-40">
                <div className="space-y-2 pr-3">
                  {uploadedFiles.map((file: string) => (
                    <div
                      key={file}
                      className="group flex justify-between gap-2 overflow-hidden rounded-lg border border-slate-100 pr-2 transition-all hover:border-slate-300 hover:pr-0"
                    >
                      <div className="flex flex-1 items-center p-2">
                        <div className="text-white">
                          {uploadedImagesColor(extractFilename(file)).icon}
                        </div>
                        <div className="ml-2 w-full space-y-1">
                          <div className="flex justify-between text-xs">
                            <p className="w-52 truncate text-ellipsis text-muted-foreground">
                              {extractFilename(file)}
                            </p>
                          </div>
                        </div>
                      </div>
                      <button
                        onClick={() => deleteFile(file)}
                        className="hidden items-center justify-center bg-red-500 px-2 text-white transition-all group-hover:flex"
                      >
                        <X size={20} />
                      </button>
                      <button
                        onClick={() => viewFile(file)}
                        className="hidden items-center justify-center bg-green-500 px-2 text-white transition-all group-hover:flex"
                      >
                        <Eye size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              </ScrollArea>
            </div>
          )}
        </div>
        <DialogFooter>
          <Button
            type="button"
            size="sm"
            onClick={uploadImages}
            disabled={loading || filesToUpload.length == 0}
          >
            {loading && <LoaderIcon />}
            {t("upload")}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Attachmodal;
