"use client";

import React from "react";
import Navbar from "@/components/navbar/navbar";
import Footer from "@/components/footer/footer";
import RegisterForm from "@/components/forms/RegisterForm";
// import BackgroundVideo from "@/components/backgroundvideo/BackgroundVideo";

export default function SerivesPage() {
return (
<>
    <Navbar />
    {/*
    <BackgroundVideo /> */}
    <div className="mb-20 mt-30">
        <RegisterForm />
    </div>
    <Footer /> 
</>
);
}
