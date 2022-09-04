import Counter from './Counter';
import './Header.css';

const Header = () => {
	return (
		<div className="header-wrapper">
			<div className="logo">
				<p>한굴</p><span className="divider">|</span><p>practice</p>
			</div>
			<Counter />
			<div className="jamo-list">
				<a href="#">Jamo List</a>
			</div>
		</div>
	);
}
 
export default Header;