import React, { Suspense, lazy } from "react";
import Complocations from "./Complocations";
import Loading from "@/pages/Loading/Landing";

export default function Lazy({ name, ...rest }) {
    const Component = lazy(Complocations[name]);
    return (
        <Suspense fallback={<Loading />}>
            <Component {...rest} />
        </Suspense >
    );
}
