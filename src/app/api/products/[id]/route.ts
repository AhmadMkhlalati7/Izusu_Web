import { prisma } from "@/lib/prisma"
import { type NextRequest, NextResponse } from "next/server"


export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    const product = await prisma.product.findUnique({
      where: { id },
    })

    if (!product) {
      return NextResponse.json({ error: "Product not found" }, { status: 404 })
    }

    return NextResponse.json(product)
  } catch (error) {
    console.error("Error fetching product:", error)
    return NextResponse.json({ error: "Error fetching product" }, { status: 500 })
  }
}

export async function PUT(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    const body = await request.json()
    const {
      title,
      description,
      images,
      category,
      gvw,
      engine,
      driving_system,
      transmission,
      power_psrpm,
      torque_kg_mrpm,
      axle_capacity,
    } = body

    const updatedProduct = await prisma.product.update({
      where: { id },
      data: {
        title,
        description,
        images,
        category,
        gvw,
        engine,
        driving_system,
        transmission,
        power_psrpm,
        torque_kg_mrpm,
        axle_capacity,
      },
    })

    return NextResponse.json(updatedProduct)
  } catch (error) {
    console.error("Error updating product:", error)
    return NextResponse.json({ error: "Error updating product" }, { status: 500 })
  }
}

export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const id = Number.parseInt(params.id)
    await prisma.product.delete({
      where: { id },
    })

    return NextResponse.json({ message: "Product deleted successfully" })
  } catch (error) {
    console.error("Error deleting product:", error)
    return NextResponse.json({ error: "Error deleting product" }, { status: 500 })
  }
}

