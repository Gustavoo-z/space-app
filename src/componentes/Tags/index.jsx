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
  border: none;
  cursor: pointer;
  &:hover {
    transform: scale(1.05);
  }
`;

export default function Tags() {
  return (
    <TagsDiv>
      <TextTags>Busque por tags:</TextTags>
      {arrayTags.map((tag) => (
        <Tag key={tag.id}>{tag.titulo}</Tag>
      ))}
    </TagsDiv>
  );
}
