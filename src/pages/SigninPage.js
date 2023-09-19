import { useState } from "react";
import { Grid } from "@mui/material";
import assets from "../assets";
import SigninForm from "../components/SigninForm";
import SignupForm from "../components/SignupForm";

export const ScreenMode = {
    SIGN_IN: "SIGN_IN",
    SIGN_UP: "SIGN_UP"
};

function SigninPage() {

    const [backgroundImage, setbackgroundImage] = useState(assets.images.signinBg);
    const [currMode, setCurrMode] = useState(ScreenMode.SIGN_IN);

    function onSwitchMode(mode) {
        setCurrMode(mode);
        setbackgroundImage(mode === ScreenMode.SIGN_IN ? assets.images.signinBg : assets.images.signupBg);
    }

    return(
        <>
            {/* <div>SigninPage</div> */}
            <Grid container sx={{ height: "100vh" }}>
                <Grid item xs={4}>
                    {
                        currMode === ScreenMode.SIGN_IN ? (
                            <SigninForm onSwitchMode={onSwitchMode} />
                        ) : (
                            <SignupForm onSwitchMode={onSwitchMode} />
                        )
                    }                    
                </Grid>
                <Grid item xs={8} sx={{ 
                    
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}> 
                </Grid> 
            </Grid>
        </>
    );
}

export default SigninPage;