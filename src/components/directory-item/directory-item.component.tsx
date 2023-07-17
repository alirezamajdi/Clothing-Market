import { useNavigate } from "react-router-dom";
import "./directory-item.style";

import {
  DirectoryItemContainer,
  Body,
  BackgrundImage,
} from "./directory-item.style";

const DirectoryItem = ({
  category,
}: {
  category: { imageUrl: string; title: string; route: string };
}) => {
  const { imageUrl, title, route } = category;
  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgrundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
