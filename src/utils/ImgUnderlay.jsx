import './styles/styles.css';

function ImgUnderlay({title}) {
  return (
		<div className="underlay">
			<img src="/underlay.jpg" alt="Underlay" />
			<h1>{title}</h1>
		</div>
  );
}

export default ImgUnderlay