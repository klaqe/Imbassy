// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3x4s7P8yWmfzeCC9Kkgod5
// Component: r6Ew0aWs1pwLGl
import * as React from "react"
import * as p from "@plasmicapp/react-web"
import * as ph from "@plasmicapp/host"
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"
import Button from "../../Button" // plasmic-import: kGeIlWdAFyx5f/component
import { useScreenVariants as useScreenVariantsfjHrDbfqgibjX } from "./PlasmicGlobalVariant__Screen" // plasmic-import: fj_HrDbfqgibjX/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_dark_saa_s_landing_page.module.css" // plasmic-import: 3x4s7P8yWmfzeCC9Kkgod5/projectcss
import * as sty from "./PlasmicPriceCard.module.css" // plasmic-import: r6Ew0aWs1pwLGl/css
import linePricingpngP8FcHbu5WNq1Yp from "./images/linePricingpng.png" // plasmic-import: p8fcHbu5wNQ1YP/picture
import checklistpngN2WzMBpZpjblt from "./images/checklistpng.png" // plasmic-import: N2WzMBp_Zpjblt/picture
import checklistPricingWhitepngRd5Cgw8Sa8Fhy0 from "./images/checklistPricingWhitepng.png" // plasmic-import: rd5cgw8Sa8Fhy0/picture

export const PlasmicPriceCard__VariantProps = new Array("primary", "borders")

export const PlasmicPriceCard__ArgProps = new Array()

function PlasmicPriceCard__RenderFunc(props) {
  const { variants, overrides, forNode } = props
  const $ctx = ph.useDataEnv?.() || {}
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args])
  const $props = args
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsfjHrDbfqgibjX(),
  })

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root,
        {
          [sty.rootborders_flatCenter]: hasVariant(
            variants,
            "borders",
            "flatCenter"
          ),

          [sty.rootborders_flatLeft]: hasVariant(
            variants,
            "borders",
            "flatLeft"
          ),

          [sty.rootborders_flatRight]: hasVariant(
            variants,
            "borders",
            "flatRight"
          ),

          [sty.rootprimary]: hasVariant(variants, "primary", "primary"),
        }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxborders_flatCenter]: hasVariant(
            variants,
            "borders",
            "flatCenter"
          ),

          [sty.freeBoxborders_flatLeft]: hasVariant(
            variants,
            "borders",
            "flatLeft"
          ),

          [sty.freeBoxborders_flatRight]: hasVariant(
            variants,
            "borders",
            "flatRight"
          ),

          [sty.freeBoxprimary]: hasVariant(variants, "primary", "primary"),
        })}
      >
        <h4
          data-plasmic-name={"h4"}
          data-plasmic-override={overrides.h4}
          className={classNames(
            projectcss.all,
            projectcss.h4,
            projectcss.__wab_text,
            sty.h4,
            {
              [sty.h4borders_flatCenter]: hasVariant(
                variants,
                "borders",
                "flatCenter"
              ),

              [sty.h4borders_flatLeft]: hasVariant(
                variants,
                "borders",
                "flatLeft"
              ),

              [sty.h4borders_flatRight]: hasVariant(
                variants,
                "borders",
                "flatRight"
              ),
            }
          )}
        >
          {hasVariant(variants, "borders", "flatRight")
            ? "Enterprise"
            : hasVariant(variants, "borders", "flatLeft")
            ? "Free"
            : "Pro"}
        </h4>

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__sunbs,
            {
              [sty.textborders_flatCenter__sunbs1Ga8U]: hasVariant(
                variants,
                "borders",
                "flatCenter"
              ),

              [sty.textborders_flatLeft__sunbs8Mpqg]: hasVariant(
                variants,
                "borders",
                "flatLeft"
              ),

              [sty.textborders_flatRight__sunbs05P8Q]: hasVariant(
                variants,
                "borders",
                "flatRight"
              ),

              [sty.textprimary__sunbspxbH9]: hasVariant(
                variants,
                "primary",
                "primary"
              ),
            }
          )}
        >
          {hasVariant(variants, "borders", "flatRight")
            ? "Flexible power and security"
            : hasVariant(variants, "borders", "flatLeft")
            ? "A complete analytics platform."
            : "A complete analytics platform."}
        </div>

        <p.PlasmicImg
          alt={""}
          className={classNames(sty.img__cjKvT)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          loading={"lazy"}
          src={{
            src: linePricingpngP8FcHbu5WNq1Yp,
            fullWidth: 300,
            fullHeight: 2,
            aspectRatio: undefined,
          }}
        />

        {(hasVariant(globalVariants, "screen", "mobileOnly") ? true : true) ? (
          <div
            className={classNames(projectcss.all, sty.columns___3Eycj, {
              [sty.columnsprimary___3EycjpxbH9]: hasVariant(
                variants,
                "primary",
                "primary"
              ),
            })}
          >
            <div className={classNames(projectcss.all, sty.column__duIjr)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__rNfDz, {
                  [sty.imgborders_flatLeft__rNfDz8Mpqg]: hasVariant(
                    variants,
                    "borders",
                    "flatLeft"
                  ),
                })}
                displayHeight={"24px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"24px"}
                loading={"lazy"}
                src={
                  hasVariant(variants, "borders", "flatLeft")
                    ? {
                        src: checklistPricingWhitepngRd5Cgw8Sa8Fhy0,
                        fullWidth: 38,
                        fullHeight: 39,
                        aspectRatio: undefined,
                      }
                    : {
                        src: checklistpngN2WzMBpZpjblt,
                        fullWidth: 48,
                        fullHeight: 48,
                        aspectRatio: undefined,
                      }
                }
              />
            </div>

            <div
              className={classNames(projectcss.all, sty.column__sKbw, {
                [sty.columnborders_flatRight__sKbw05P8Q]: hasVariant(
                  variants,
                  "borders",
                  "flatRight"
                ),
              })}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__twVgj,
                  {
                    [sty.textborders_flatLeft__twVgj8Mpqg]: hasVariant(
                      variants,
                      "borders",
                      "flatLeft"
                    ),

                    [sty.textborders_flatRight__twVgj05P8Q]: hasVariant(
                      variants,
                      "borders",
                      "flatRight"
                    ),

                    [sty.textprimary__twVgjpxbH9]: hasVariant(
                      variants,
                      "primary",
                      "primary"
                    ),
                  }
                )}
              >
                {hasVariant(variants, "borders", "flatRight")
                  ? "Everything in pro"
                  : hasVariant(variants, "borders", "flatLeft")
                  ? "1 Product"
                  : "Up to 10 projects"}
              </div>
            </div>
          </div>
        ) : null}

        {(
          hasVariant(variants, "borders", "flatCenter")
            ? true
            : hasVariant(variants, "primary", "primary")
            ? true
            : true
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__xvL07, {
              [sty.columnsborders_flatCenter__xvL071Ga8U]: hasVariant(
                variants,
                "borders",
                "flatCenter"
              ),

              [sty.columnsborders_flatLeft__xvL078Mpqg]: hasVariant(
                variants,
                "borders",
                "flatLeft"
              ),

              [sty.columnsborders_flatRight__xvL0705P8Q]: hasVariant(
                variants,
                "borders",
                "flatRight"
              ),

              [sty.columnsprimary__xvL07PxbH9]: hasVariant(
                variants,
                "primary",
                "primary"
              ),
            })}
          >
            <div className={classNames(projectcss.all, sty.column__zIn7D)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__ati8T, {
                  [sty.imgborders_flatLeft__ati8T8Mpqg]: hasVariant(
                    variants,
                    "borders",
                    "flatLeft"
                  ),
                })}
                displayHeight={"24px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"24px"}
                loading={"lazy"}
                src={
                  hasVariant(variants, "borders", "flatLeft")
                    ? {
                        src: checklistPricingWhitepngRd5Cgw8Sa8Fhy0,
                        fullWidth: 38,
                        fullHeight: 39,
                        aspectRatio: undefined,
                      }
                    : {
                        src: checklistpngN2WzMBpZpjblt,
                        fullWidth: 48,
                        fullHeight: 48,
                        aspectRatio: undefined,
                      }
                }
              />
            </div>

            <div className={classNames(projectcss.all, sty.column__tYSwF)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__f5GK7,
                  {
                    [sty.textborders_flatCenter__f5GK71Ga8U]: hasVariant(
                      variants,
                      "borders",
                      "flatCenter"
                    ),

                    [sty.textborders_flatLeft__f5GK78Mpqg]: hasVariant(
                      variants,
                      "borders",
                      "flatLeft"
                    ),

                    [sty.textborders_flatRight__f5GK705P8Q]: hasVariant(
                      variants,
                      "borders",
                      "flatRight"
                    ),

                    [sty.textprimary__f5GK7PxbH9]: hasVariant(
                      variants,
                      "primary",
                      "primary"
                    ),
                  }
                )}
              >
                {hasVariant(variants, "borders", "flatRight")
                  ? "Volume discount"
                  : hasVariant(variants, "borders", "flatLeft")
                  ? "Analytics board"
                  : hasVariant(variants, "primary", "primary")
                  ? "Analytics board"
                  : "Up to 10 projects"}
              </div>
            </div>
          </div>
        ) : null}

        {(
          hasVariant(variants, "borders", "flatCenter")
            ? true
            : hasVariant(variants, "borders", "flatLeft")
            ? true
            : hasVariant(variants, "primary", "primary")
            ? true
            : hasVariant(globalVariants, "screen", "mobileOnly")
            ? true
            : true
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__vtxVk, {
              [sty.columnsborders_flatCenter__vtxVk1Ga8U]: hasVariant(
                variants,
                "borders",
                "flatCenter"
              ),

              [sty.columnsborders_flatLeft__vtxVk8Mpqg]: hasVariant(
                variants,
                "borders",
                "flatLeft"
              ),

              [sty.columnsprimary__vtxVKpxbH9]: hasVariant(
                variants,
                "primary",
                "primary"
              ),
            })}
          >
            <div className={classNames(projectcss.all, sty.column___9R4)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__tVrEb, {
                  [sty.imgborders_flatLeft__tVrEb8Mpqg]: hasVariant(
                    variants,
                    "borders",
                    "flatLeft"
                  ),
                })}
                displayHeight={"24px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"24px"}
                loading={"lazy"}
                src={
                  hasVariant(variants, "borders", "flatLeft")
                    ? {
                        src: checklistPricingWhitepngRd5Cgw8Sa8Fhy0,
                        fullWidth: 38,
                        fullHeight: 39,
                        aspectRatio: undefined,
                      }
                    : {
                        src: checklistpngN2WzMBpZpjblt,
                        fullWidth: 48,
                        fullHeight: 48,
                        aspectRatio: undefined,
                      }
                }
              />
            </div>

            <div
              className={classNames(projectcss.all, sty.column__gGmQq, {
                [sty.columnborders_flatLeft__gGmQq8Mpqg]: hasVariant(
                  variants,
                  "borders",
                  "flatLeft"
                ),

                [sty.columnborders_flatRight__gGmQq05P8Q]: hasVariant(
                  variants,
                  "borders",
                  "flatRight"
                ),

                [sty.columnprimary__gGmQqpxbH9]: hasVariant(
                  variants,
                  "primary",
                  "primary"
                ),
              })}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__ye4OD,
                  {
                    [sty.textborders_flatLeft__ye4OD8Mpqg]: hasVariant(
                      variants,
                      "borders",
                      "flatLeft"
                    ),

                    [sty.textprimary__ye4ODpxbH9]: hasVariant(
                      variants,
                      "primary",
                      "primary"
                    ),
                  }
                )}
              >
                {hasVariant(variants, "borders", "flatLeft")
                  ? "Insights panel"
                  : hasVariant(variants, "primary", "primary")
                  ? "Analytics board"
                  : "Up to 10 projects"}
              </div>
            </div>

            {(
              hasVariant(variants, "borders", "flatRight")
                ? true
                : hasVariant(variants, "borders", "flatLeft")
                ? true
                : hasVariant(variants, "primary", "primary")
                ? true
                : hasVariant(globalVariants, "screen", "mobileOnly")
                ? true
                : true
            ) ? (
              <div
                className={classNames(projectcss.all, sty.column__hMoz2, {
                  [sty.columnborders_flatLeft__hMoz28Mpqg]: hasVariant(
                    variants,
                    "borders",
                    "flatLeft"
                  ),

                  [sty.columnborders_flatRight__hMoz205P8Q]: hasVariant(
                    variants,
                    "borders",
                    "flatRight"
                  ),

                  [sty.columnprimary__hMoz2PxbH9]: hasVariant(
                    variants,
                    "primary",
                    "primary"
                  ),
                })}
              />
            ) : null}
          </div>
        ) : null}

        {(
          hasVariant(variants, "borders", "flatCenter")
            ? true
            : hasVariant(variants, "borders", "flatLeft")
            ? true
            : hasVariant(variants, "primary", "primary")
            ? true
            : hasVariant(globalVariants, "screen", "mobileOnly")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__rqPp5, {
              [sty.columnsborders_flatCenter__rqPp51Ga8U]: hasVariant(
                variants,
                "borders",
                "flatCenter"
              ),

              [sty.columnsborders_flatLeft__rqPp58Mpqg]: hasVariant(
                variants,
                "borders",
                "flatLeft"
              ),

              [sty.columnsprimary__rqPp5PxbH9]: hasVariant(
                variants,
                "primary",
                "primary"
              ),
            })}
          >
            <div className={classNames(projectcss.all, sty.column__b6P7O)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img___0UFd7, {
                  [sty.imgborders_flatLeft___0UFd78Mpqg]: hasVariant(
                    variants,
                    "borders",
                    "flatLeft"
                  ),
                })}
                displayHeight={"24px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"24px"}
                loading={"lazy"}
                src={
                  hasVariant(variants, "borders", "flatLeft")
                    ? {
                        src: checklistPricingWhitepngRd5Cgw8Sa8Fhy0,
                        fullWidth: 38,
                        fullHeight: 39,
                        aspectRatio: undefined,
                      }
                    : {
                        src: checklistpngN2WzMBpZpjblt,
                        fullWidth: 48,
                        fullHeight: 48,
                        aspectRatio: undefined,
                      }
                }
              />
            </div>

            <div className={classNames(projectcss.all, sty.column__xysvO)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__aKhNc,
                  {
                    [sty.textborders_flatLeft__aKhNc8Mpqg]: hasVariant(
                      variants,
                      "borders",
                      "flatLeft"
                    ),

                    [sty.textprimary__aKhNcpxbH9]: hasVariant(
                      variants,
                      "primary",
                      "primary"
                    ),
                  }
                )}
              >
                {hasVariant(variants, "borders", "flatLeft")
                  ? "CLI access"
                  : hasVariant(variants, "primary", "primary")
                  ? "Analytics board"
                  : "Up to 10 projects"}
              </div>
            </div>
          </div>
        ) : null}

        {(
          hasVariant(variants, "borders", "flatCenter")
            ? true
            : hasVariant(variants, "primary", "primary")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__cvaO, {
              [sty.columnsborders_flatCenter__cvaO1Ga8U]: hasVariant(
                variants,
                "borders",
                "flatCenter"
              ),

              [sty.columnsprimary__cvaOpxbH9]: hasVariant(
                variants,
                "primary",
                "primary"
              ),
            })}
          >
            <div className={classNames(projectcss.all, sty.column__lhZcO)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img___6GkxO)}
                displayHeight={"24px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"24px"}
                loading={"lazy"}
                src={{
                  src: checklistpngN2WzMBpZpjblt,
                  fullWidth: 48,
                  fullHeight: 48,
                  aspectRatio: undefined,
                }}
              />
            </div>

            <div className={classNames(projectcss.all, sty.column__x6RN4)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___3WuZr,
                  {
                    [sty.textborders_flatCenter___3WuZr1Ga8U]: hasVariant(
                      variants,
                      "borders",
                      "flatCenter"
                    ),

                    [sty.textprimary___3WuZrpxbH9]: hasVariant(
                      variants,
                      "primary",
                      "primary"
                    ),
                  }
                )}
              >
                {"Insights panel"}
              </div>
            </div>
          </div>
        ) : null}

        {(
          hasVariant(variants, "borders", "flatCenter")
            ? true
            : hasVariant(variants, "primary", "primary")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns___3Mr08, {
              [sty.columnsborders_flatCenter___3Mr081Ga8U]: hasVariant(
                variants,
                "borders",
                "flatCenter"
              ),

              [sty.columnsprimary___3Mr08PxbH9]: hasVariant(
                variants,
                "primary",
                "primary"
              ),
            })}
          >
            <div className={classNames(projectcss.all, sty.column__kn4Kl)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__fPUt3)}
                displayHeight={"24px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={
                  hasVariant(globalVariants, "screen", "mobileOnly")
                    ? "16px"
                    : "24px"
                }
                loading={"lazy"}
                src={{
                  src: checklistpngN2WzMBpZpjblt,
                  fullWidth: 48,
                  fullHeight: 48,
                  aspectRatio: undefined,
                }}
              />
            </div>

            <div className={classNames(projectcss.all, sty.column___0O5BK)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___4D4E5,
                  {
                    [sty.textprimary___4D4E5PxbH9]: hasVariant(
                      variants,
                      "primary",
                      "primary"
                    ),
                  }
                )}
              >
                {"CLI access"}
              </div>
            </div>
          </div>
        ) : null}

        {(
          hasVariant(variants, "borders", "flatCenter")
            ? true
            : hasVariant(variants, "primary", "primary")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__sJeDt, {
              [sty.columnsborders_flatCenter__sJeDt1Ga8U]: hasVariant(
                variants,
                "borders",
                "flatCenter"
              ),

              [sty.columnsprimary__sJeDtpxbH9]: hasVariant(
                variants,
                "primary",
                "primary"
              ),
            })}
          >
            <div className={classNames(projectcss.all, sty.column___5O7R7)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__x9Kvb)}
                displayHeight={"24px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"24px"}
                loading={"lazy"}
                src={{
                  src: checklistpngN2WzMBpZpjblt,
                  fullWidth: 48,
                  fullHeight: 48,
                  aspectRatio: undefined,
                }}
              />
            </div>

            <div className={classNames(projectcss.all, sty.column___3HH35)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__c8HMc,
                  {
                    [sty.textprimary__c8HMcpxbH9]: hasVariant(
                      variants,
                      "primary",
                      "primary"
                    ),
                  }
                )}
              >
                {"Automation features"}
              </div>
            </div>
          </div>
        ) : null}

        {(
          hasVariant(variants, "borders", "flatCenter")
            ? true
            : hasVariant(variants, "primary", "primary")
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.columns__cliXk, {
              [sty.columnsborders_flatCenter__cliXk1Ga8U]: hasVariant(
                variants,
                "borders",
                "flatCenter"
              ),

              [sty.columnsprimary__cliXKpxbH9]: hasVariant(
                variants,
                "primary",
                "primary"
              ),
            })}
          >
            <div className={classNames(projectcss.all, sty.column__qUkW)}>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img__nvIKz)}
                displayHeight={"24px"}
                displayMaxHeight={"none"}
                displayMaxWidth={"100%"}
                displayMinHeight={"0"}
                displayMinWidth={"0"}
                displayWidth={"24px"}
                loading={"lazy"}
                src={{
                  src: checklistpngN2WzMBpZpjblt,
                  fullWidth: 48,
                  fullHeight: 48,
                  aspectRatio: undefined,
                }}
              />
            </div>

            <div className={classNames(projectcss.all, sty.column___9Xn75)}>
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__uDvj6,
                  {
                    [sty.textprimary__uDvj6PxbH9]: hasVariant(
                      variants,
                      "primary",
                      "primary"
                    ),
                  }
                )}
              >
                {"Team features"}
              </div>
            </div>
          </div>
        ) : null}

        <p.PlasmicImg
          alt={""}
          className={classNames(sty.img__gqBnf)}
          displayHeight={"auto"}
          displayMaxHeight={"none"}
          displayMaxWidth={"100%"}
          displayMinHeight={"0"}
          displayMinWidth={"0"}
          displayWidth={"auto"}
          loading={"lazy"}
          src={{
            src: linePricingpngP8FcHbu5WNq1Yp,
            fullWidth: 300,
            fullHeight: 2,
            aspectRatio: undefined,
          }}
        />

        {(
          hasVariant(variants, "borders", "flatCenter")
            ? true
            : hasVariant(variants, "borders", "flatRight")
            ? true
            : hasVariant(variants, "borders", "flatLeft")
            ? true
            : false
        ) ? (
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__qlwRy,
              {
                [sty.textborders_flatCenter__qlwRy1Ga8U]: hasVariant(
                  variants,
                  "borders",
                  "flatCenter"
                ),

                [sty.textborders_flatLeft__qlwRy8Mpqg]: hasVariant(
                  variants,
                  "borders",
                  "flatLeft"
                ),

                [sty.textborders_flatRight__qlwRy05P8Q]: hasVariant(
                  variants,
                  "borders",
                  "flatRight"
                ),
              }
            )}
          >
            {hasVariant(variants, "borders", "flatCenter")
              ? "$ 50"
              : hasVariant(variants, "borders", "flatRight")
              ? "$ 800"
              : "$ 0"}
          </div>
        ) : null}

        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text___9RlSo,
            {
              [sty.textborders_flatCenter___9RlSo1Ga8U]: hasVariant(
                variants,
                "borders",
                "flatCenter"
              ),

              [sty.textborders_flatLeft___9RlSo8Mpqg]: hasVariant(
                variants,
                "borders",
                "flatLeft"
              ),

              [sty.textborders_flatRight___9RlSo05P8Q]: hasVariant(
                variants,
                "borders",
                "flatRight"
              ),
            }
          )}
        >
          {hasVariant(variants, "borders", "flatRight")
            ? "Starting price, customizable"
            : hasVariant(variants, "borders", "flatLeft")
            ? "Free Forever"
            : "per project/month"}
        </div>

        {(
          hasVariant(variants, "borders", "flatRight")
            ? true
            : hasVariant(variants, "borders", "flatLeft")
            ? true
            : true
        ) ? (
          <Button
            data-plasmic-name={"button"}
            data-plasmic-override={overrides.button}
            className={classNames("__wab_instance", sty.button, {
              [sty.buttonborders_flatCenter]: hasVariant(
                variants,
                "borders",
                "flatCenter"
              ),

              [sty.buttonborders_flatLeft]: hasVariant(
                variants,
                "borders",
                "flatLeft"
              ),

              [sty.buttonborders_flatRight]: hasVariant(
                variants,
                "borders",
                "flatRight"
              ),

              [sty.buttonprimary]: hasVariant(variants, "primary", "primary"),
            })}
            color={
              hasVariant(variants, "borders", "flatLeft") ? "white" : "blue"
            }
            endIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__ukRL)}
                role={"img"}
              />
            }
            link={"#"}
            startIcon={
              <svg
                className={classNames(projectcss.all, sty.svg__qhaNs)}
                role={"img"}
              />
            }
          >
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text___64EN,
                {
                  [sty.textborders_flatCenter___64EN1Ga8U]: hasVariant(
                    variants,
                    "borders",
                    "flatCenter"
                  ),

                  [sty.textborders_flatLeft___64EN8Mpqg]: hasVariant(
                    variants,
                    "borders",
                    "flatLeft"
                  ),

                  [sty.textborders_flatRight___64EN05P8Q]: hasVariant(
                    variants,
                    "borders",
                    "flatRight"
                  ),
                }
              )}
            >
              {hasVariant(variants, "borders", "flatCenter")
                ? "Go Become pro"
                : hasVariant(variants, "borders", "flatRight")
                ? "Everything is yours"
                : hasVariant(variants, "borders", "flatLeft")
                ? "Claim Free"
                : "Go Become pro"}
            </div>
          </Button>
        ) : null}
      </div>
    </div>
  )
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "h4", "button"],
  freeBox: ["freeBox", "h4", "button"],
  h4: ["h4"],
  button: ["button"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicPriceCard__ArgProps,
          internalVariantPropNames: PlasmicPriceCard__VariantProps,
        }),

      [props, nodeName]
    )

    return PlasmicPriceCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicPriceCard"
  } else {
    func.displayName = `PlasmicPriceCard.${nodeName}`
  }
  return func
}

export const PlasmicPriceCard = Object.assign(
  // Top-level PlasmicPriceCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    h4: makeNodeComponent("h4"),
    button: makeNodeComponent("button"),
    // Metadata about props expected for PlasmicPriceCard
    internalVariantProps: PlasmicPriceCard__VariantProps,
    internalArgProps: PlasmicPriceCard__ArgProps,
  }
)

export default PlasmicPriceCard
/* prettier-ignore-end */
