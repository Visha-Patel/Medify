import './News.css';
import NewsImg from '../../assets/newsImg.svg';
import Author from '../../assets/newsAuthor.svg';

export default function News() {
    return (
        <div className='News'>
            <p className='newsHeader'>Blog & News</p>
            <h2>Read Our Latest News</h2>
            <div className='newsBottom'>
                <div className='newsCard'>
                <img src={NewsImg} alt="news" className='newsImage'/>
                <div className='date'>
                    <p>Medical</p>
                    <hr />
                    <p>March 31, 2022</p>
                </div>
                <p className='newsTitle'>6 Tips To Protect Your Mental Health When You’re Sick</p>
                <p className='newsAuthor'>
                    <img src={Author} alt="author" />
                    Rebecca Lee
                </p>
                </div>
                <div className='newsCard'>
                <img src={NewsImg} alt="news" className='newsImage'/>
                <div className='date'>
                    <p>Medical</p>
                    <hr />
                    <p>March 31, 2022</p>
                </div>
                <p className='newsTitle'>6 Tips To Protect Your Mental Health When You’re Sick</p>
                <p  className='newsAuthor'>
                    <img src={Author} alt="author" />
                    Rebecca Lee
                </p>
                </div>
                <div className='newsCard'>
                <img src={NewsImg} alt="news" className='newsImage'/>
                <div className='date'>
                    <p>Medical</p>
                    <hr />
                    <p>March 31, 2022</p>
                </div>
                <p className='newsTitle'>6 Tips To Protect Your Mental Health When You’re Sick</p>
                <p className='newsAuthor'>
                    <img src={Author} alt="author" />
                    Rebecca Lee
                </p>
                </div>
            </div>

        </div>
    )
}