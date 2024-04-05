import React from "react"
import Lottie from "react-lottie"

export default function LottieAnimation({ lotti, width, height}) {
    const defaultOption = {
        loop: true,
        autoplay: true,
        animationData: lotti,
        renderSettings: {
            preserveAspectRatio: "xMidYMid slice",
        }
    };

    return(
        <div>
            <Lottie options={defaultOption} height={100} width={100} />
        </div>
    )
};