import { Link, type LinkProps } from "@tanstack/react-router";
import { getProjectLinkProps } from "@/lib/project-routes";

type ProjectDetailLinkProps = Omit<LinkProps, "to" | "params"> & {
  slug: string;
};

export function ProjectDetailLink({ slug, ...props }: ProjectDetailLinkProps) {
  const linkProps = getProjectLinkProps(slug);
  return <Link {...linkProps} {...props} />;
}
