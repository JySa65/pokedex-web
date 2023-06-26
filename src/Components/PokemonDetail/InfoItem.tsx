import tw, { styled } from "twin.macro";

const InfoItemContainer = tw.p`
    text-xl font-semibold mb-5 text-justify
`;

const InfoItemValue = tw.span`font-semibold ml-2 text-black max-h-32 overflow-y-auto`;

interface InfoItemProps {
  label: string;
  value: string | string[];
  color?: string;
}

const InfoItem = ({ label, value, color }: InfoItemProps) => {
  return (
    <InfoItemContainer style={{ color }}>
      {label}:{" "}
      <InfoItemValue>
        {typeof value === "string" ? value : value.join(", ")}
      </InfoItemValue>
    </InfoItemContainer>
  );
};

export default InfoItem;
