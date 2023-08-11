import './footer.scss';
import {BsLinkedin, BsGithub} from 'react-icons/bs';

function Footer() {
	return (
		<div className='footer-container'>
			<div className='footer-content'>
				<p>Visa info iš: G.Visockienė "Jaunajam daržininkui" ir "Sodininko ir daržininko mėgejo žinynas". Abi knygos man kainavo 1.80eur.</p>
				<a
					href='https://www.linkedin.com/in/ignas-venckunas/'
					target='_blank'
				>
					<BsLinkedin />
				</a>
				<a
					href='https://github.com/ivenckunas'
					target='_blank'
				>
					<BsGithub />
				</a>
			</div>
		</div>
	);
}

export default Footer;
