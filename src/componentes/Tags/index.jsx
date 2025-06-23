import styled from "styled-components";
import arrayTags from "./tags.json";

const TagsDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-top: 40px;
`;

const TextTags = styled.p`
  color: #d9d9d9;
  font-size: 24px;
`;

const Tag = styled.button`
  background-color: #d9d9d94d;
  color: #fff;
  font-size: 24px;
  border-radius: 10px;
  padding: 8px;
  border: ${({ isActive }) => (isActive ? "1px solid #c98cf1" : "none")};
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export default function Tags({ setSearchTagId }) {
  function selectButton(tag) {
    console.log(tag.id);
    arrayTags.forEach((item) => {
      if (item.id === tag.id) {
        item.active = true;
      } else {
        item.active = false;
      }
    });
  }

  function changeCategory(tag) {
    selectButton(tag);
    setSearchTagId(tag.id);
  }

  return (
    <TagsDiv>
      <TextTags>Busque por tags:</TextTags>
      {arrayTags.map((tag) => (
        <Tag
          isActive={tag.active}
          onClick={() => changeCategory(tag)}
          key={tag.id}
        >
          {tag.titulo}
        </Tag>
      ))}
    </TagsDiv>
  );
}
