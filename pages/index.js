import React, { useEffect, useState } from 'react'

const Home = () => {
  const [themeColor, setThemeColor] = useState(undefined);

  // themeColor（状態）が変更されるたびに実行
  useEffect(() => {
    if (themeColor !== undefined) {
      // true = ダークモード
      if (themeColor) {
        document.documentElement.setAttribute("data-theme", "dark");
        window.localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem('theme', 'light');
      }
    }
  }, [themeColor])

  const handleToggle = (e) => {
    setThemeColor(e.target.checked);
  };

  return (
    <div>
      <div className='container'>
        <nav>
          <div>My Portfolio Site</div>
          <div>
            <form action='#'>
              <label className='switch'>
                <input type="checkbox" onChange={handleToggle} />
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