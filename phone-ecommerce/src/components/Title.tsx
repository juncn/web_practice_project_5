interface Props {
  name: string;
  title: string;
}

const Title = ({ name, title }: Props) => (
  <div className="row">
    <div className="col-10 mx-auto my-2 text-center text-title">
      <h1 className="text-capitialize font-weight-bold">
        {name} <strong className="text-blue">{title}</strong>
      </h1>
    </div>
  </div>
);

export default Title;
