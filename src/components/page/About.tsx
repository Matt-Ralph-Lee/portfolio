export default function About() {
  return (
    <div className="h-screen flex items-center bg-bg text-base font-montserrat">
      <div className="h-1/2 md:h-3/5 mx-10 md:mx-52 flex flex-col justify-between text-baseblack">
        <div>
          <div className="text-lg md:text-2xl tracking-widest">About Me</div>
          <div className="text-4xl md:text-6xl tracking-widest">
            I'm Matthew
          </div>
        </div>
        <div className="font-notojp md:w-4/6 text-base leading-6">
          はじめまして、ましゅうです。
          <br />
          <br />
          東京工業大学に入学してからプログラミングをはじめ、授業で通信技術を学びながら、個人ではウェブ開発からスタートし、次第に機械学習やモバイルアプリ開発にも興味を広げました。
          <br />
          大学生活の中でweb開発の実務経験も積んでおり、また学部の中で人を集め、チーム開発のリードも行ってきました。
          <br />
          <br />
          ぜひこのページで私のプロジェクトを楽しんでください！
        </div>
      </div>
    </div>
  );
}
