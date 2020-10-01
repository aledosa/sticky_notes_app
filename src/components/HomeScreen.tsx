import React, { useState } from "react";
import {
  AddCircleOutlineIcon,
  Card,
  ClickableElement,
  colors,
  Column,
  DivFlex,
  DivGeneral,
  H2,
  H3,
  H4,
  Row,
  SvgSizes,
  TextareaElement,
  withParentColumns,
  Wrapper,
} from "@the-ksquare-group/zanma-react-components";

export const HomeScreen: React.FC = () => {
  const [isNoteAdded, updateIsNoteAdded] = useState<boolean>(false);
  const [isTextAdded, updateIsTextAdded] = useState<string>("");

  const handleAddNote = () => {
    updateIsNoteAdded(true);
  };

  const handleChangeTextarea = ({
    target: { value },
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    updateIsTextAdded(value);
  };

  const noteContentLgWidth = withParentColumns(9);
  //   const noteContentMdWidth = withParentColumns(4);
  //   const noteContentSmWidth = withParentColumns(4);

  return (
    <Wrapper className="homeScreen-wrapper">
      <Row className="header-row">
        <Column className="header-column" lg={12} md={8} sm={4}>
          <DivGeneral padding="32px 0 48px">
            <DivFlex alignContent="center" paddingBottom="24px">
              <H2 color={colors.GRAY_500}>Stickers Note App</H2>
            </DivFlex>
            <DivFlex alignContent="center" paddingBottom="24px">
              <H3 color={colors.GRAY_300}>Welcome Alexa!</H3>
            </DivFlex>
            <DivFlex alignContent="center" paddingBottom="24px">
              <H4 color={colors.GRAY_200} css="text-transform: none;">
                To start writing and organizing your life click in the note
                below.
              </H4>
            </DivFlex>
          </DivGeneral>
        </Column>
      </Row>
      <DivFlex>
        <Row className="body-row">
          <Column
            className="Menu-column"
            css={`
              border-right: 1px solid ${colors.GRAY_200};
              display: inline-block;
              height: 100%;
            `}
            lg={0.5}
            md={4}
            sm={4}
          >
            <ClickableElement onClick={handleAddNote}>
              <AddCircleOutlineIcon
                fill={colors.BLUE_200}
                size={SvgSizes.LG}
                title="Add note"
              />
            </ClickableElement>
          </Column>
          <Column
            className="notes-column"
            css={`
              display: inline-block;
              height: 100%;
            `}
            lg={9}
            md={4}
            sm={4}
          >
            <DivFlex>
              <Column
                className="card-column"
                lg={noteContentLgWidth(3)}
                md={4}
                sm={4}
              >
                <Card
                  css={`
                    background-color: ${colors.YELLOW_200};
                  `}
                >
                  <DivFlex>
                    <TextareaElement
                      css={`
                        border: 1px solid transparent;

                        &::placeholder {
                          color: ${colors.GRAY_300};
                        }
                        &:active,
                        &:focus {
                          border-color: ${colors.GRAY_200};
                        }
                      `}
                      id="noteText"
                      name="noteArea"
                      placeholder="Insert text here"
                      value={isTextAdded}
                      onChange={handleChangeTextarea}
                    />
                  </DivFlex>
                </Card>
              </Column>
              {isNoteAdded && (
                <Column
                  className="card-column"
                  lg={noteContentLgWidth(3)}
                  md={4}
                  sm={4}
                >
                  <Card
                    css={`
                      background-color: ${colors.YELLOW_200};
                    `}
                  >
                    <DivFlex>
                      <TextareaElement
                        css={`
                          border: 1px solid transparent;

                          &::placeholder {
                            color: ${colors.GRAY_300};
                          }

                          &:active,
                          &:focus {
                            border-color: ${colors.GRAY_200};
                          }
                        `}
                        id="noteText"
                        name="noteArea"
                        placeholder="Insert text here"
                        value={isTextAdded}
                        onChange={handleChangeTextarea}
                      />
                    </DivFlex>
                  </Card>
                </Column>
              )}
            </DivFlex>
          </Column>
        </Row>
      </DivFlex>
    </Wrapper>
  );
};
