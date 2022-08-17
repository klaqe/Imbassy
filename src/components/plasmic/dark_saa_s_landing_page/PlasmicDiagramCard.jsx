// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 3x4s7P8yWmfzeCC9Kkgod5
// Component: reeIT8h8pGc4bh
import * as React from "react"
import * as ph from "@plasmicapp/host"
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants,
} from "@plasmicapp/react-web"
import { useScreenVariants as useScreenVariantsfjHrDbfqgibjX } from "./PlasmicGlobalVariant__Screen" // plasmic-import: fj_HrDbfqgibjX/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css"
import * as projectcss from "./plasmic_dark_saa_s_landing_page.module.css" // plasmic-import: 3x4s7P8yWmfzeCC9Kkgod5/projectcss
import * as sty from "./PlasmicDiagramCard.module.css" // plasmic-import: reeIT8h8pGc4bh/css

export const PlasmicDiagramCard__VariantProps = new Array()

export const PlasmicDiagramCard__ArgProps = new Array()

function PlasmicDiagramCard__RenderFunc(props) {
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
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox)}
      >
        <h5
          data-plasmic-name={"h5"}
          data-plasmic-override={overrides.h5}
          className={classNames(
            projectcss.all,
            projectcss.h5,
            projectcss.__wab_text,
            sty.h5
          )}
        >
          {hasVariant(globalVariants, "screen", "mobileOnly")
            ? "Lorem Ipsum"
            : "Lorem Ipsum"}
        </h5>

        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {hasVariant(globalVariants, "screen", "mobileOnly")
            ? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "
            : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed "}
        </div>
      </div>
    </div>
  )
}

const PlasmicDescendants = {
  root: ["root", "freeBox", "h5", "text"],
  freeBox: ["freeBox", "h5", "text"],
  h5: ["h5"],
  text: ["text"],
}

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicDiagramCard__ArgProps,
          internalVariantPropNames: PlasmicDiagramCard__VariantProps,
        }),

      [props, nodeName]
    )

    return PlasmicDiagramCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName,
    })
  }
  if (nodeName === "root") {
    func.displayName = "PlasmicDiagramCard"
  } else {
    func.displayName = `PlasmicDiagramCard.${nodeName}`
  }
  return func
}

export const PlasmicDiagramCard = Object.assign(
  // Top-level PlasmicDiagramCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),
    h5: makeNodeComponent("h5"),
    text: makeNodeComponent("text"),
    // Metadata about props expected for PlasmicDiagramCard
    internalVariantProps: PlasmicDiagramCard__VariantProps,
    internalArgProps: PlasmicDiagramCard__ArgProps,
  }
)

export default PlasmicDiagramCard
/* prettier-ignore-end */