// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: i1R9JuZcEVnjtzkqUFoFHH
// Component: dhGNAMj3iuoljn
import * as React from "react"
import * as p from "@plasmicapp/react-web"
import * as ph from "@plasmicapp/host"
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import Button from "../../Button" // plasmic-import: P_arPT46Us9VtF/component
import Divider from "../../Divider" // plasmic-import: VgmxWXQKoqVq_F/component
import TextInput from "../../TextInput" // plasmic-import: fBmKM1xcoPYjsM/component
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_landing_page_starter.module.css" // plasmic-import: i1R9JuZcEVnjtzkqUFoFHH/projectcss
import * as sty from "./PlasmicSignUpPrompt.module.css" // plasmic-import: dhGNAMj3iuoljn/css
import GoogleIcon from "./icons/PlasmicIcon__Google" // plasmic-import: 3UiztK8jOwvrXc/icon
import WandIcon from "./icons/PlasmicIcon__Wand" // plasmic-import: gohulD3iaHAmdI/icon

export const PlasmicSignUpPrompt__VariantProps = new Array()

export const PlasmicSignUpPrompt__ArgProps = new Array()

function PlasmicSignUpPrompt__RenderFunc(props) {
  const { variants, overrides, forNode } = props
  const $ctx = ph.useDataEnv?.() || {}
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args])
  const $props = args
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
      <div className={classNames(projectcss.all, sty.freeBox__o8ISh)}>
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox___7Mso2)}
        >
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__los2Q
            )}
          >
            {"Sign up with"}
          </div>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___6EK4J)}
          >
            <Button
              className={classNames("__wab_instance", sty.button__wtrH0)}
              outline={true}
              showStartIcon={true}
            >
              {"Apple"}
            </Button>

            <Button
              className={classNames("__wab_instance", sty.button__zVYn0)}
              outline={true}
              showStartIcon={true}
              startIcon={
                <GoogleIcon
                  className={classNames(projectcss.all, sty.svg__ah8KH)}
                  role={"img"}
                />
              }
            >
              {"Google"}
            </Button>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__hj88R)}
          >
            <Divider
              className={classNames("__wab_instance", sty.divider__zkivL)}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__xJowj
              )}
            >
              {"Or"}
            </div>

            <Divider
              className={classNames("__wab_instance", sty.divider___3BjwH)}
            />
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox__pQZsZ)}
          >
            <TextInput
              className={classNames("__wab_instance", sty.textInput___4HfiL)}
              placeholder={"Full Name"}
            />

            <TextInput
              className={classNames("__wab_instance", sty.textInput__i01HR)}
              placeholder={"Email"}
            />

            <TextInput
              className={classNames("__wab_instance", sty.textInput__lLzoo)}
              placeholder={"Password"}
            />
          </p.Stack>

          <Button
            className={classNames("__wab_instance", sty.button__otRwt)}
            color={"indigo"}
            endIcon={
              <WandIcon
                className={classNames(projectcss.all, sty.svg__eiQxZ)}
                role={"img"}
              />
            }
          >
            {"Start your account"}
          </Button>
        </p.Stack>

        <Divider
          className={classNames("__wab_instance", sty.divider___2ZUlm)}
        />

        <div className={classNames(projectcss.all, sty.freeBox__bCeej)}>
          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__r1WL
            )}
          >
            {
              "A cras sagittis odio vestibulum pulvinar a eget hendrerit id vestibulum a leo sociosqu dictumst dictumst natoque magnis parturient."
            }
          </div>
        </div>
      </div>
    </p.Stack>
  )
}

const PlasmicDescendants = {
  root: ["root"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicSignUpPrompt__ArgProps,
          internalVariantPropNames: PlasmicSignUpPrompt__VariantProps,
        }),

      [props, nodeName]
    )

    return PlasmicSignUpPrompt__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicSignUpPrompt"
  } else {
    func.displayName = `PlasmicSignUpPrompt.${nodeName}`
  }
  return func
}

export const PlasmicSignUpPrompt = Object.assign(
  // Top-level PlasmicSignUpPrompt renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    // Metadata about props expected for PlasmicSignUpPrompt
    internalVariantProps: PlasmicSignUpPrompt__VariantProps,
    internalArgProps: PlasmicSignUpPrompt__ArgProps,
  }
)

export default PlasmicSignUpPrompt
/* prettier-ignore-end */
