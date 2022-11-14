import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='container'>
        <nav>
          <div>My Portfolio Site</div>
          <div>
            <form action='#'>
              <label className='switch'>
                <input type="checkbox" />
                <span className='slider'></span>
              </label>
            </form>
          </div>
        </nav>

        <section>
          <div className='content'>
            <h1>Next.js でサイト作成</h1>
            <h3>プログラミングチュートリアルチャンネルを参考に、ポートフォリオサイトを作成する</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <button className='primary-btn'>お問い合わせ</button>       
          </div>
        </section>
      </div>
    </div>
  )
}

export default Home