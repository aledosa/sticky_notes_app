import React, { useState } from "react";
import {
  AddCircleOutlineIcon,
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
  withParentColumns,
  Wrapper,
} from "@the-ksquare-group/zanma-react-components";
import { NoteComponent } from "../molecules/NoteComponent";
import { initialData } from "../atoms/DummyData";

export const HomeScreen: React.FC = () => {
  const [notesAddedCounter, updateNotesAddedCounter] = useState(1);
  const [data, updateData] = useState(initialData);

  const handleClickAddNote = () => {
    updateNotesAddedCounter(notesAddedCounter + 1);
    updateData([...data, { noteId: notesAddedCounter, text: "" }]);
  };

  const handleChangeTextarea = ({
    target: { value },
  }: React.ChangeEvent<HTMLTextAreaElement>) => {
    const getFocusedNoteId = document.activeElement?.id;
    updateData([{ noteId: Number(getFocusedNoteId), text: value }]);
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
              <H2 color={colors.GRAY_500}>Sticky Notes App</H2>
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
            <TertiaryButton onClick={handleClickAddNote}>
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
              {data.map((note, index) => (
                <Column
                  className="card-column"
                  css="padding: 8px 0;"
                  key={`noteColumn-${index}`}
                  lg={noteContentLgWidth(3.5)}
                  md={noteContentMdWidth(3.5)}
                  sm={noteContentSmWidth(4)}
                >
                  <NoteComponent
                    id={String(note.noteId)}
                    key={`noteKey-${index}`}
                    name={`noteName-${note.noteId}`}
                    value={note.text}
                    onChangeTextarea={handleChangeTextarea}
                  />
                </Column>
              ))}
            </Row>
          </Column>
        </DivFlex>
      </Row>
    </Wrapper>
  );
};
