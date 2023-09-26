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
							aria-label='Linkedin page of Ignas Venckunas'
						>
							<BsLinkedin />
						</a>
						<a
							href='https://github.com/ivenckunas'
							target='_blank'
							aria-label='Github page of Ignas Venckunas'
						>
							<BsGithub />
						</a>
					</div>
					<div className='art'>
						<p>Daržovių pixel art - Anton P.</p>
						<a
							href='https://www.linkedin.com/in/anton-polujanov-40062b271/'
							target='_blank'
							aria-label='Linkedin page of Anton Polujanov'
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
