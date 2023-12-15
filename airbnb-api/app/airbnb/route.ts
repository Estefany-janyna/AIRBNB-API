import { NextRequest, NextResponse } from "next/server";
import{places} from "@/app/airbnb/mock/places";

export function Get(req:NextRequest){
    return NextResponse.json(places)
}