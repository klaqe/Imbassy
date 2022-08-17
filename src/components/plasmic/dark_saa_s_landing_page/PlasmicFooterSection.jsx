// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3x4s7P8yWmfzeCC9Kkgod5
// Component: 6VHAP6clfrxQI_
import * as React from "react"
import { Link } from "gatsby"
import * as p from "@plasmicapp/react-web"
import * as ph from "@plasmicapp/host"
import {
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
import * as sty from "./PlasmicFooterSection.module.css" // plasmic-import: 6VHAP6clfrxQI_/css
import FacebooksvgIcon from "./icons/PlasmicIcon__Facebooksvg" // plasmic-import: A3r4T3PVPNnody/icon
import TwittersvgIcon from "./icons/PlasmicIcon__Twittersvg" // plasmic-import: kxGWu9wvzRbugo/icon
import InstagramsvgIcon from "./icons/PlasmicIcon__Instagramsvg" // plasmic-import: cXSIRsm6n1oZMl/icon
import LinkedinsvgIcon from "./icons/PlasmicIcon__Linkedinsvg" // plasmic-import: 1wr1k3ndrk9mlc/icon

export const PlasmicFooterSection__VariantProps = new Array()

export const PlasmicFooterSection__ArgProps = new Array()

function PlasmicFooterSection__RenderFunc(props) {
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
        sty.root
      )}
    >
      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(projectcss.all, sty.freeBox___8ZoM)}
      >
        <div
          data-plasmic-name={"columns"}
          data-plasmic-override={overrides.columns}
          className={classNames(projectcss.all, sty.columns)}
        >
          <div className={classNames(projectcss.all, sty.column__tgMaq)}>
            <div className={classNames(projectcss.all, sty.freeBox__gHey4)}>
              <Logo
                data-plasmic-name={"logo"}
                data-plasmic-override={overrides.logo}
                className={classNames("__wab_instance", sty.logo)}
              />

              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__iqv8S
                )}
              >
                {
                  "Lorem ipsum dolor sit amet, consectetur \nadipiscing elit, sed do eiusmod tempor"
                }
              </div>

              <div className={classNames(projectcss.all, sty.freeBox__o35Jc)}>
                <FacebooksvgIcon
                  className={classNames(projectcss.all, sty.svg__oskf)}
                  role={"img"}
                />

                <TwittersvgIcon
                  className={classNames(projectcss.all, sty.svg__o5Gkq)}
                  role={"img"}
                />

                <InstagramsvgIcon
                  className={classNames(projectcss.all, sty.svg__sqXoM)}
                  role={"img"}
                />

                <LinkedinsvgIcon
                  className={classNames(projectcss.all, sty.svg__rLAe2)}
                  role={"img"}
                />
              </div>
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.column__rs0Al)}>
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__iiy9S
              )}
            >
              {"Menu"}
            </h4>

            <Button
              className={classNames("__wab_instance", sty.button___2APdl)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__pkXv0)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__thsPk)}
                  role={"img"}
                />
              }
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__bJfhM
                )}
                component={Link}
                platform={"gatsby"}
              >
                {"Product"}
              </p.PlasmicLink>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__o1Qfh)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__yFnwn)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__emdz0)}
                  role={"img"}
                />
              }
            >
              <p.PlasmicLink
                className={classNames(
                  projectcss.all,
                  projectcss.a,
                  projectcss.__wab_text,
                  sty.link__cwmB5
                )}
                component={Link}
                platform={"gatsby"}
              >
                {"Purchase"}
              </p.PlasmicLink>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__g3C6M)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg___0WPf)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__efZoS)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__oTVdp
                )}
              >
                {"How it Work"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__guVzl)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__dcavv)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__qa8Ua)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__nq82C
                )}
              >
                {"About us"}
              </div>
            </Button>
          </div>

          <div className={classNames(projectcss.all, sty.column__e3TO)}>
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__f98Wq
              )}
            >
              {"Help"}
            </h4>

            <Button
              className={classNames("__wab_instance", sty.button__jMeZf)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__opIqz)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__c9M)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__uEjbf
                )}
              >
                {"Privacy and\nPolicy"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__uxSA)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__lIfTo)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__xpR1D)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__qWzj2
                )}
              >
                {"Terms of Use"}
              </div>
            </Button>
          </div>

          <div className={classNames(projectcss.all, sty.column___1JbpT)}>
            <h4
              className={classNames(
                projectcss.all,
                projectcss.h4,
                projectcss.__wab_text,
                sty.h4__lrlyk
              )}
            >
              {"Company"}
            </h4>

            <Button
              className={classNames("__wab_instance", sty.button__of8Xz)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__rsV48)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__z1Jcm)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__x6PYf
                )}
              >
                {"Our Team"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__rlwr1)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__lA9R8)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__stDgp)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__otVfk
                )}
              >
                {"Partner with us"}
              </div>
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__wgOoY)}
              color={"footerButton"}
              endIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg__jRiWa)}
                  role={"img"}
                />
              }
              link={"#"}
              startIcon={
                <svg
                  className={classNames(projectcss.all, sty.svg___6Sq4L)}
                  role={"img"}
                />
              }
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text__b33Bi
                )}
              >
                {"Privacy & Policy"}
              </div>
            </Button>
          </div>
        </div>
      </p.Stack>

      <div className={classNames(projectcss.all, sty.freeBox__xtCyN)}>
        <div
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text__kfn1M
          )}
        >
          {"Copyrights © 2022 All Rights Reserved by PlasmicApp"}
        </div>
      </div>
    </div>
  )
}

const PlasmicDescendants = {
  root: ["root", "columns", "logo"],
  columns: ["columns", "logo"],
  logo: ["logo"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicFooterSection__ArgProps,
          internalVariantPropNames: PlasmicFooterSection__VariantProps,
        }),

      [props, nodeName]
    )

    return PlasmicFooterSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterSection"
  } else {
    func.displayName = `PlasmicFooterSection.${nodeName}`
  }
  return func
}

export const PlasmicFooterSection = Object.assign(
  // Top-level PlasmicFooterSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    columns: makeNodeComponent("columns"),
    logo: makeNodeComponent("logo"),
    // Metadata about props expected for PlasmicFooterSection
    internalVariantProps: PlasmicFooterSection__VariantProps,
    internalArgProps: PlasmicFooterSection__ArgProps,
  }
)

export default PlasmicFooterSection
/* prettier-ignore-end */
