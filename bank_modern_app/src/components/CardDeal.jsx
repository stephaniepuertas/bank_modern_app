import {card} from '../assets';
import styles, {layout} from '../style';
import Button from './Button';

const CardDeal = () => (
    <section className={layout.section} >
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>Fund a better card deal <br className='sm:block hidden'/> 
        in few easy steps.</h2>
        <p className={`${styles.paragraph} max-w-[460px] mt-5`}>Arcu torto, purus in mattis at sed integer facubus. Aliquet quis aliquet eget mauris toror. ç aliquet ultrices ac, ametau.</p>
        <Button styles='mt-10'/>
      </div>

      <div className={layout.sectionImg}>
        <img src={card} alt='card' className='w-[100%] h-[100%] ' />

      </div>
    </section>
)


export default CardDeal