interface Props {
  description: string;
  color: string;
}

export const Title = ({ description, color }: Props) => {
  return (
    <h1 style={{ color }}>
      <span style={{ fontWeight: 600 }}>{description}</span>
    </h1>
  );
};
