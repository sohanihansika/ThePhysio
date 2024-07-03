import React from "react";
import CardGym from "./components/card-gym/card-gym";

function GymHome() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Gym Membership</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <CardGym
                title={"Card1"}
                description={"Description1"}
                imageUrl={"https://source.unsplash.com/random/800x600"}
                link={"/gym/card1"}
                />
            </div>
        </div>
    );
}

export default GymHome;