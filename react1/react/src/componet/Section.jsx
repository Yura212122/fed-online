import React from 'react';

const Section = () => {
    return (
       <>
       <section className="top-bg-section-second" style={{ width: "100%" }}>
  <div className="container p-5">
    <h4 className="text-center text-light p-5">
      About <br />
      DesignCaféとは
    </h4>
    <p className="text-center text-light p-4">
      DesignCaféは、色々なクリエイターが、<br />
      交流する空間カフェです。<br />
      仲間を探したり、仕事を依頼したり、<br />
      新たな出会いを探してみませんか。
    </p>
    <div className="p-5 w-100 mx-auto text-center">
      <button className="p-2 text-light" style={{backgroundColor: "rgba(102, 142, 104, 1)", borderRadius:"25px", minWidth: "20%" }}>
        もっと見る &nbsp;
        <i className="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  </div>
</section>

       </>
    );
};

export default Section;