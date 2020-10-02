import React, { useState } from "react";
import {
  AddCircleOutlineIcon,
  Card,
  //   ClickableElement,
  colors,
  Column,
  DivFlex,
  DivGeneral,
  H2,
  H3,
  H4,
  mediaQueries,
  Row,
  SvgSizes,
  TertiaryButton,
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

  const noteContentLgWidth = withParentColumns(12);
  const noteContentMdWidth = withParentColumns(8);
  const noteContentSmWidth = withParentColumns(4);

  return (
    <Wrapper className="homeScreen-wrapper" css="width: auto;">
      <Row className="header-row">
        <Column
          className="header-column"
          lg={noteContentLgWidth(12)}
          md={noteContentMdWidth(8)}
          sm={noteContentSmWidth(4)}
        >
          <DivGeneral padding="32px 0 48px">
            <DivFlex alignContent="center" paddingBottom="24px">
              <H2 color={colors.GRAY_500}>Stickers Note App</H2>
            </DivFlex>
            <DivFlex alignContent="center" paddingBottom="24px">
              <H3 color={colors.GRAY_300}>Welcome Alexa!</H3>
            </DivFlex>
            <DivFlex alignContent="center" paddingBottom="24px">
              <H4 color={colors.GRAY_200} css="text-transform: none;">
                To start writing and organizing your life click on the note
                below.
              </H4>
            </DivFlex>
          </DivGeneral>
        </Column>
      </Row>

      <Row className="body-row">
        <DivFlex
          css={`
            flex: 1;
            flex-direction: column;
            @media (min-width: ${mediaQueries.SMALL_TABLET_MIN_WIDTH}) {
              flex-direction: row;
            }
          `}
        >
          <Column
            className="leftSide-column"
            css={`
              border-bottom: 1px solid ${colors.GRAY_200};
              padding: 16px 0;
              @media (min-width: ${mediaQueries.SMALL_TABLET_MIN_WIDTH}) {
                border-bottom: none;
                border-right: 1px solid ${colors.GRAY_200};
              }
            `}
            justifyContent="center"
            lg={noteContentLgWidth(1)}
            md={noteContentMdWidth(1)}
            sm={noteContentSmWidth(4)}
          >
            <TertiaryButton onClick={handleAddNote}>
              <DivFlex justifyContent="center">
                <AddCircleOutlineIcon
                  fill={colors.BLUE_200}
                  size={SvgSizes.LG}
                  title="Add note"
                />
              </DivFlex>
            </TertiaryButton>
          </Column>
          <Column
            className="rightSide-column"
            css="padding: 8px 0;"
            lg={noteContentLgWidth(11)}
            md={noteContentMdWidth(7)}
            sm={noteContentSmWidth(4)}
          >
            <Row
              className="cards-row"
              css={`
                margin: 0;
                @media (min-width: ${mediaQueries.SMALL_TABLET_MIN_WIDTH}) {
                  margin-left: -8px;
                  margin-right: -8px;
                }
              `}
            >
              <Column
                className="card-column"
                css="padding: 8px 0;"
                lg={noteContentLgWidth(3.5)}
                md={noteContentMdWidth(3.5)}
                sm={noteContentSmWidth(4)}
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

              <Column
                className="card-column"
                css="padding: 8px 0;"
                lg={noteContentLgWidth(3.5)}
                md={noteContentMdWidth(3.5)}
                sm={noteContentSmWidth(4)}
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
              <Column
                className="card-column"
                css="padding: 8px 0;"
                lg={noteContentLgWidth(3.5)}
                md={noteContentMdWidth(3.5)}
                sm={noteContentSmWidth(4)}
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
                  css="padding: 8px 0;"
                  lg={noteContentLgWidth(3.5)}
                  md={noteContentMdWidth(3.5)}
                  sm={noteContentSmWidth(4)}
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
            </Row>
          </Column>
        </DivFlex>
      </Row>
    </Wrapper>
  );
};
