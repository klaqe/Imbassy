// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: i1R9JuZcEVnjtzkqUFoFHH
// Component: VA6dWVSHWgl0Bj
import * as React from "react"
import * as p from "@plasmicapp/react-web"
import * as ph from "@plasmicapp/host"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"
import Logo from "../../Logo" // plasmic-import: uS1uLwuSb3ygBY/component
import Button from "../../Button" // plasmic-import: P_arPT46Us9VtF/component
import { useScreenVariants as useScreenVariantsmcpPndYlKly8 } from "./PlasmicGlobalVariant__Screen" // plasmic-import: -mcpPnd-YLKly8/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_landing_page_starter.module.css" // plasmic-import: i1R9JuZcEVnjtzkqUFoFHH/projectcss
import * as sty from "./PlasmicNavbar.module.css" // plasmic-import: VA6dWVSHWgl0Bj/css

export const PlasmicNavbar__VariantProps = new Array()

export const PlasmicNavbar__ArgProps = new Array()

function PlasmicNavbar__RenderFunc(props) {
  const { variants, overrides, forNode } = props
  const $ctx = ph.useDataEnv?.() || {}
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args])
  const $props = args
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsmcpPndYlKly8(),
  })

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox__mcAnL)}
      >
        <Logo
          data-plasmic-name={"logo"}
          data-plasmic-override={overrides.logo}
          className={classNames("__wab_instance", sty.logo)}
        />

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___123Nl)}
        >
          <Button
            className={classNames("__wab_instance", sty.button__qsb1L)}
            color={"navLink"}
            link={"/services"}
          >
            {"Services"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__dVlDe)}
            color={"navLink"}
          >
            {"Features"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__ffnbG)}
            color={"navLink"}
          >
            {"Company"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button___36MFx)}
            color={"navLink"}
          >
            {"Contact"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__uy3Gz)}
            color={"navLink"}
          >
            {"Log in"}
          </Button>

          <Button
            className={classNames("__wab_instance", sty.button__kJuCd)}
            color={"darkGray"}
          >
            {"Sign up"}
          </Button>
        </p.Stack>

        {false ? (
          <div className={classNames(projectcss.all, sty.freeBox__fophO)}>
            <button
              className={classNames(
                projectcss.all,
                projectcss.button,
                projectcss.__wab_text,
                sty.button__mpNet
              )}
            >
              {"Sign up"}
            </button>

            <Button className={classNames("__wab_instance", sty.button__sRtSl)}>
              {"Log in"}
            </Button>
          </div>
        ) : null}
      </p.Stack>
    </p.Stack>
  )
}

const PlasmicDescendants = {
  root: ["root", "logo"],
  logo: ["logo"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicNavbar__ArgProps,
          internalVariantPropNames: PlasmicNavbar__VariantProps,
        }),

      [props, nodeName]
    )

    return PlasmicNavbar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicNavbar"
  } else {
    func.displayName = `PlasmicNavbar.${nodeName}`
  }
  return func
}

export const PlasmicNavbar = Object.assign(
  // Top-level PlasmicNavbar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    logo: makeNodeComponent("logo"),
    // Metadata about props expected for PlasmicNavbar
    internalVariantProps: PlasmicNavbar__VariantProps,
    internalArgProps: PlasmicNavbar__ArgProps,
  }
)

export default PlasmicNavbar
/* prettier-ignore-end */
