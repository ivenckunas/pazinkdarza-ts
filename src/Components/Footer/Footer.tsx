import './footer.scss';
import {BsLinkedin, BsGithub} from 'react-icons/bs';

function Footer() {
	return (
		<div className='footer-container'>
			<div className='footer-content'>
				<p>
					Visa info iš: G.Visockienė "Jaunajam daržininkui" ir "Sodininko ir daržininko mėgejo žinynas". <br /> Abi knygos man kainavo 3.6eur.
				</p>
				<div className='credits'>
					<div className='dev'>
						<p>Radai klaidą, nori kažką pasiūlyti ar papildyti? Rašyk - Ignas V.</p>
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
					<div className='art'>
						<p>Daržovių pixel art - Anton P.</p>
						<a
							href='https://www.linkedin.com/in/ignas-venckunas/'
							target='_blank'
						>
							<BsLinkedin />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Footer;
