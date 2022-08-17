// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: i1R9JuZcEVnjtzkqUFoFHH
// Component: 5byNHbPk-_VgwY
import * as React from "react"
import * as p from "@plasmicapp/react-web"
import * as ph from "@plasmicapp/host"
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
} from "@plasmicapp/react-web"
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_landing_page_starter.module.css" // plasmic-import: i1R9JuZcEVnjtzkqUFoFHH/projectcss
import * as sty from "./PlasmicSection.module.css" // plasmic-import: 5byNHbPk-_VgwY/css

export const PlasmicSection__VariantProps = new Array("background", "size")

export const PlasmicSection__ArgProps = new Array("children")

function PlasmicSection__RenderFunc(props) {
  const { variants, overrides, forNode } = props
  const $ctx = ph.useDataEnv?.() || {}
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args])
  const $props = args
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
          [sty.rootbackground_dark]: hasVariant(variants, "background", "dark"),
          [sty.rootbackground_gray]: hasVariant(variants, "background", "gray"),
          [sty.rootsize_fullContentWidth]: hasVariant(
            variants,
            "size",
            "fullContentWidth"
          ),
        }
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxsize_fullContentWidth]: hasVariant(
            variants,
            "size",
            "fullContentWidth"
          ),
        })}
      >
        {p.renderPlasmicSlot({
          defaultContents: null,
          value: args.children,
        })}
      </div>
    </div>
  )
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicSection__ArgProps,
          internalVariantPropNames: PlasmicSection__VariantProps,
        }),

      [props, nodeName]
    )

    return PlasmicSection__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicSection"
  } else {
    func.displayName = `PlasmicSection.${nodeName}`
  }
  return func
}

export const PlasmicSection = Object.assign(
  // Top-level PlasmicSection renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    // Metadata about props expected for PlasmicSection
    internalVariantProps: PlasmicSection__VariantProps,
    internalArgProps: PlasmicSection__ArgProps,
  }
)

export default PlasmicSection
/* prettier-ignore-end */
