import { Suspense, lazy } from "react";
import type { ClassKey } from "keycloakify/login";
import type { KcContext } from "./KcContext";
import { useI18n } from "./i18n";
import DefaultPage from "keycloakify/login/DefaultPage";
import Template from "keycloakify/login/Template";
import "./main.css";
const UserProfileFormFields = lazy(
    () => import("keycloakify/login/UserProfileFormFields")
);

const doMakeUserConfirmPassword = true;

export default function KcPage(props: { kcContext: KcContext }) {
    const { kcContext } = props;

    const { i18n } = useI18n({ kcContext });

    return (
        <Suspense>
            {(() => {
                switch (kcContext.pageId) {
                    default:
                        return (
                            <div
                                style={{
                                    display: "flex",
                                    flexDirection: "row",
                                    height: "100vh",
                                    width: "100%",
                                    // fontFamily: "Arial, sans-serif",
                                    // background: `linear-gradient(125deg, #8021C8 -10%, #6B21A8 15%, #581C87 30%, #3B1667 50%, #1F1544 75%)`,
                                    // color: "#FFFFFF",
                                    // margin: 0,
                                    // padding: 0
                                }}
                            >
                                {/* <div
                                    style={{
                                        display: "flex",
                                        backgroundColor: "purple",
                                        width: "30%",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        fontSize: "2em"
                                    }}>
                                    HIGHLIGHT
                                </div> */}
                                <DefaultPage
                                    kcContext={kcContext}
                                    i18n={i18n}
                                    classes={classes}
                                    Template={Template}
                                    doUseDefaultCss={true}
                                    UserProfileFormFields={UserProfileFormFields}
                                    doMakeUserConfirmPassword={doMakeUserConfirmPassword}
                                />
                            </div>
                        );
                }
            })()}
        </Suspense>
    );
}

const classes = {} satisfies { [key in ClassKey]?: string };
