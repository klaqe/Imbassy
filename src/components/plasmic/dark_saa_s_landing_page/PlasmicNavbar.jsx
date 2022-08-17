// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3x4s7P8yWmfzeCC9Kkgod5
// Component: jD-ij6xvvvU54
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
import Logo from "../../Logo" // plasmic-import: pf_THH6dZ52jv/component
import Button from "../../Button" // plasmic-import: kGeIlWdAFyx5f/component
import { useScreenVariants as useScreenVariantsfjHrDbfqgibjX } from "./PlasmicGlobalVariant__Screen" // plasmic-import: fj_HrDbfqgibjX/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_dark_saa_s_landing_page.module.css" // plasmic-import: 3x4s7P8yWmfzeCC9Kkgod5/projectcss
import * as sty from "./PlasmicNavbar.module.css" // plasmic-import: jD-ij6xvvvU54/css

export const PlasmicNavbar__VariantProps = new Array()

export const PlasmicNavbar__ArgProps = new Array()

function PlasmicNavbar__RenderFunc(props) {
  const { variants, overrides, forNode } = props
  const $ctx = ph.useDataEnv?.() || {}
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args])
  const $props = args
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsfjHrDbfqgibjX(),
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
        className={classNames(projectcss.all, sty.freeBox__z0YHz)}
      >
        {true ? (
          <Logo
            data-plasmic-name={"logo"}
            data-plasmic-override={overrides.logo}
            className={classNames("__wab_instance", sty.logo)}
            smallLogo={
              hasVariant(globalVariants, "screen", "mobileOnly")
                ? undefined
                : undefined
            }
          />
        ) : null}

        {true ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__ztU94)}
          >
            <Button
              className={classNames("__wab_instance", sty.button__ktSQ)}
              color={"navLink"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__mxQaG)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__zwQQf)}
                  role={"img"}
                />
              }
            >
              {"Product"}
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__oZf6F)}
              color={"navLink"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__sy3El)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__mp5Xb)}
                  role={"img"}
                />
              }
            >
              {"Purchase"}
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__uxcuj)}
              color={"navLink"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__tDyeU)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__eI2T)}
                  role={"img"}
                />
              }
            >
              {"How it Work"}
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__jdZ7X)}
              color={"navLink"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__ivDPg)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg___571PB)}
                  role={"img"}
                />
              }
            >
              {"About us"}
            </Button>
          </p.Stack>
        ) : null}

        {true ? (
          <div className={classNames(projectcss.all, sty.freeBox__yZ0Ut)}>
            <Button
              className={classNames("__wab_instance", sty.button__mXpV1)}
              color={"navLink"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__j7Zz8)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__quKgV)}
                  role={"img"}
                />
              }
            >
              {"Log in"}
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__nyxUl)}
              color={"navLinkBlue"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__rasU)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__zX0)}
                  role={"img"}
                />
              }
            >
              {"Sign Up"}
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
