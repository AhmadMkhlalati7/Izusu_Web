import { API_ENDPOINTS } from "@/lib/settings";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { QUERYKEYS } from "@/query/constants";
import { Product } from "@/types";
import http from "@/lib/http";




export const fetchProducts = async (): Promise<Product[]> => {
    const { data } = await http.get(`https://dummyjson.com${API_ENDPOINTS.ALLPRODUCTS}`);
    return data.products;
};

export const useGetFetchAllProducts = (
): UseQueryResult<Product[], Error> => {
    return useQuery<Product[], Error>({
        queryKey: [QUERYKEYS.ALLPRODUCTS],
        queryFn: () => fetchProducts(),
    });
};

