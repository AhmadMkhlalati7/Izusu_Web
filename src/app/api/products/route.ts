import { prisma } from "@/lib/prisma"
import { type NextRequest, NextResponse } from "next/server"


export async function POST(request: NextRequest) {
  try {
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

    const result = await prisma.product.create({
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

    return NextResponse.json(result, { status: 201 })
  } catch (error) {
    console.error("Error creating product:", error)
    return NextResponse.json({ error: "Error creating product" }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    const products = await prisma.product.findMany()
    return NextResponse.json(products)
  } catch (error) {
    console.error("Error fetching products:", error)
    return NextResponse.json({ error: "Error fetching products" }, { status: 500 })
  }
}

