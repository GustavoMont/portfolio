import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Span } from "src/styles/Typograph";
import { ColorKey } from "src/styles/colors/colors.type";
import styled from "styled-components";

export type BreadcrumbItem = {
  text: string;
  href: string;
};

type Props = {
  breadcrumbs: BreadcrumbItem[];
  color?: ColorKey;
};

export const Breadcrumb: React.FC<Props> = ({
  breadcrumbs,
  color = "primary",
}) => {
  const router = useRouter();
  const pathname = router.asPath;

  return (
    <BreadecrumbContainer>
      {breadcrumbs.map(({ href, text }, index, array) => {
        const isHomeHref = href === "/";
        const isActive = !isHomeHref && pathname.includes(href);
        return (
          <Link href={href} key={href}>
            <FlexContainer>
              <Span
                decoration="underline"
                color={isActive ? color : undefined}
                hoverColor={isActive ? "white" : "light-primary"}
              >
                {text}
              </Span>
              {index < array.length - 1 ? (
                <Span className="separator">&gt;</Span>
              ) : (
                <></>
              )}
            </FlexContainer>
          </Link>
        );
      })}
    </BreadecrumbContainer>
  );
};

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

const BreadecrumbContainer = styled(FlexContainer)`
  span {
    display: block;
    max-width: 140px;
    text-overflow: ellipsis;
    overflow-x: hidden;
    white-space: nowrap;
    font-size: 0.9rem;
  }
  span.separator {
    margin: 0 0.5rem;
    display: inline;
  }
`;
