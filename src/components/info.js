import React, { useState } from 'react';
import '../styles/info.css';
import Header from './Header';

function Info() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleInfoBox = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Header />
      
      <div className="neu-page">
        {/* Top-right image */}
       

        <aside className={`info-box ${isOpen ? 'open' : 'closed'}`}>
          <button className="toggle-btn" onClick={toggleInfoBox}>
            {isOpen ? '▲' : '▼'}
          </button>
          {isOpen && (
            <div>
              <h2>Info Box</h2>
              <div className="info-item">
                <strong>Name</strong>
                <p>Gunsel City Arts,Science and Innovation</p>
              </div>
              <div className="info-item">
                <strong>Category</strong>
                <p>Comprehensive research and educational institution.</p>
              </div>
              <div className="info-item">
                <strong>Acronym</strong>
                <p>GCASI</p>
              </div>
              <div className="info-item">
                <strong>Establishment</strong>
                <p>2024</p>
              </div>
              <div className="info-item">
                <strong>Location</strong>
                <p>Nicosia, North Cyprus</p>
              </div>
              <div className="info-item">
                <strong>Key Areas</strong>
                <p>AI, Robotics, IoT, Medical Sciences, and Engineering</p>
              </div>
            </div>
          )}
        </aside>

        <main className="content">
          <nav className="breadcrumb">
            <a href="/">Home</a> &gt; <a href="/universities">Universitie</a> &gt; 
          </nav>
          <img src="/1.jpeg" alt="Top Right Photo" className="below-breadcrumb-image" />
          <h2> The Gunsel City Arts,Science and Innovation</h2>
          <div className="article-meta">
           
          </div>

          <section className="intro">
            <p>Gunsel City <a href="/arts" className="link">Arts</a>,Science and Innovation  is a leading hub for scientific research, innovation, and technological advancement in the region. The city serves as a cornerstone in advancing applied research, supporting university-based scientific initiatives, and transforming research outputs into impactful solutions that benefit various industrial sectors.</p>
          </section>

          <section className="responsibilities">
            <h3>Responsibilities and Mission</h3>
            <p>Responsibilities and Mission
            The mission of Gunsel City includes providing high-quality arts and technology consulting services, developing mechanisms to convert scientific research into industrial and technological applications, and advancing a National Strategy focused on Industrial and Logistics Development. Gunsel City also plays an essential role in supporting universities and research centers with state-of-the-art facilities and guidance.</p>
          </section>

          <section className="historical-background">
            <h3>Historical Background</h3>
            <p>Gunsel City has evolved into its present form, benefitting from the support of Near East University’s vision to establish a forward-thinking center for science and technology. Since its inception, Gunsel City has focused on fostering an environment where education, research, and technology blend seamlessly, advancing both the regional and international scientific community's goals.
</p>
          </section>

          <section className="service-fields">
            <h3>Gunsel City Of Arts ,Science and Innovation Service Fields</h3>
            <div>
              <h4>Scientific Research Support</h4>
              <p>Gunsel City provides resources to advance university-led research projects, supporting scholars with logistics, scientific advisory, and technical resources. These initiatives aim to align academic research with industry demands and enhance job market readiness through scientific programs designed from a supply-and-demand perspective.</p>
            </div>
            <div>
              <h4>Laboratories and Technological Development</h4>
              <p>The city hosts advanced laboratories and promotes technological services for<a href="https://ogrencidekanligi.neu.edu.tr/student-life/student-clubs-and-associations/?lang=en" target="_blank" className="link">students</a> , faculty, and research professionals. This infrastructure ensures cutting-edge research capabilities and aids in the development of innovative scientific solutions. Gunsel City continually upgrades its laboratories and enhances its technical services, catering to various scientific disciplines and supporting hands-on, practical learning.</p>
            </div>
            <div>
              <h4>Innovation and Entrepreneurship Support</h4>
              <p>Gunsel City places a strong emphasis on cultivating an ecosystem that supports innovation and entrepreneurship. Through programs dedicated to business incubation, technology transfer, and investment opportunities, Gunsel City enables transformative research to enter commercial markets. These services are complemented by mentorship and funding resources, which support start-ups and accelerate technological ventures.</p>
            </div>
       
          <div>
          <h4>Arts and science at Gunsel city </h4>
              <p>The <a href="/arts" className="link">Arts</a> at Gunsel city are an essential part of its vibrant academic and cultural community, offering students a dynamic environment to explore creativity and develop artistic skills. NEU is home to a variety of arts disciplines, including visual arts, performing arts, and design, with programs and facilities that support student expression and innovation.

One of the standout elements of the university's commitment to the arts is the Faculty of Fine Arts and Design, where students delve into fields such as painting, sculpture, graphic design, and interior design. The faculty encourages hands-on learning, allowing students to cultivate their skills in a supportive atmosphere that blends traditional and contemporary approaches. Through exhibitions, workshops,<a href="https://neu.edu.tr/campus-life/museums/?lang=en" className="link">art museum</a>  ,and collaborations, students gain real-world experience and engage with the broader artistic community.</p>
            </div>
          </section>
     
          <section className="medical-innovation">
            <h3>Medical and Health Innovation</h3>
            <div>
              {/* <h4>Hospital and Specialized Medical Centers</h4> */}
              <p> <a href="/Hospital" className="link">Hospital</a> and Specialized Medical Centers
              Gunsel City boasts a comprehensive hospital that serves as a training and research ground for students while offering medical services to the community. The facility is equipped with advanced medical technology, allowing professionals and students to engage in pioneering research and clinical care.</p>
            </div>
            <div>
              <h4>Veterinary Hospital</h4>
              <p>Gunsel City’s  <a href="/veterinary" className="link">veterinary</a> hospital stands as a center of excellence in animal health and care, providing both educational and practical resources for veterinary students. This facility also contributes to research in veterinary science and advances in animal health technologies.</p>
            </div>
            <div>
              <h4>Dental Research and Training Center</h4>
              <p>The <a href="/dentistry" className="link">dentistry</a> center within Gunsel City offers state-of-the-art equipment and training resources for dental students. It also conducts research in dental science, with a focus on improving dental care practices and advancing oral health research.</p>
            </div>
            <h4>Health and Wellness Center</h4>
            <p>This center not only serves the community but also contributes to public health research and education. Equipped with modern technology, it offers extensive health services and hosts wellness programs, enhancing the quality of life for the university community.</p>
            
          </section>

          <section className="key-achievements">
            <h3>Key Achievements of Gunsel City for Science and Technology</h3>
            <p>Among the many notable accomplishments, Gunsel City’s Arts,Science and Innovation have led to advancements in medical technology, breakthroughs in agricultural research, and collaborations with leading international institutions. Gunsel City is also recognized for its success in launching collaborative projects aimed at sustainable development and technology integration in regional industries.

</p>
<p>Roles and Functions of Gunsel City Of Arts,Science and Innovation
Operating from its headquarters at Near East University, Gunsel City is charged with significant responsibilities, including fostering partnerships with international institutions, enhancing technology transfer initiatives, and supporting innovative solutions across disciplines. The center’s diverse roles encompass technological investment, providing strategic consultancy, and coordinating national science, technology, and innovation activities to address regional and global challenges.</p>
          </section>

          <section className="laboratories">
            <h3>Laboratories and Advanced Research Centers</h3>
            <p>Gunsel City Of Arts,Science and Innovation houses a variety of laboratories that span across multiple fields, enabling groundbreaking research and practical training in science and engineering disciplines. These labs are designed with state-of-the-art equipment to support high-level research and experimentation.</p>
            <div>
              <h4>Biomedical Laboratories</h4>
              <p>Dedicated to advancing medical science, Gunsel’s biomedical labs focus on genetics, cell biology, and disease research. These labs are pivotal in developing new diagnostics and treatments, allowing faculty and students to contribute to critical medical advancements.</p>
            </div>
            <div>
              <h4>Materials Science and Nanotechnology Lab</h4>
              <p>Here, researchers explore the properties of new materials at a molecular level, working on innovations in nanotechnology, sustainable materials, and high-performance compounds used in various industries. This lab enables collaborations that push the boundaries of materials engineering.</p>
            </div>
            <div>
              <h4>Renewable Energy and Environmental Research Lab</h4>
              <p>Addressing global sustainability challenges, this lab emphasizes renewable energy research, water resource management, and environmental conservation. Students and researchers focus on developing energy-efficient technologies and sustainable practices to support green innovation in Cyprus and beyond.</p>
            </div>
          </section>

          <section className="centers-of-excellence">
            <h3>Centers of Excellence</h3>
            <p>Gunsel City is home to centers dedicated to enhancing educational and research capabilities across disciplines.</p>
            <div>
              <h4>The <a href="/innovation" className="link">Innovation</a> and Entrepreneurship Center</h4>
              <p>The center fosters a culture of innovation by supporting startups, providing incubation services, and facilitating access to funding. Programs within this center are tailored to guide young entrepreneurs and help them bring their technological ideas to market. Gunsel’s incubator program has supported numerous tech-based startups, which have now gained traction in local and international markets.</p>
            </div>
            <div>
              <h4>Artificial Intelligence and Robotics Center</h4>
              <p>Focused on the development of AI and robotics, this center enables advancements in automation, smart systems, and machine learning. Notably, the AI and Robotics Center created Prof Dux, an AI lecturer system, which serves as an interactive, intelligent teaching assistant capable of delivering lectures, answering complex questions, and managing course materials for students. Prof Dux stands as a remarkable innovation, exemplifying the center’s commitment to educational technology. The center further explores autonomous robotics for medical applications and AI-driven data analytics, making it a cornerstone for interdisciplinary research and practical projects in AI.</p>
            </div>
            <div>
              <h4>Center for Technology and Public Policy</h4>
              <p>This center is committed to exploring the impact of technological advancements on public policy, aiming to bridge the gap between innovation and regulation. It supports research in areas like data privacy, ethical AI, and the societal implications of emerging technologies, guiding policymakers and researchers alike.</p>
            </div>
          </section>
          <section className="gunsel-cars">
            <h3>Gunsel Cars Company</h3>
            <p>A pivotal branch of Gunsel City, <a href="/gunsel" className="link">Gunsel Cars Company</a> embodies the city’s vision for sustainable and technologically advanced transportation. Known for producing electric vehicles tailored for both performance and environmental impact, Gunsel Cars has introduced models that incorporate cutting-edge battery technology, AI-based driving assistance, and highly efficient energy management systems.</p>
            
            <h4>Gunsel B9 and Sustainable Mobility</h4>
            <p>The Gunsel B9, the company’s flagship electric vehicle, reflects Gunsel City’s commitment to eco-friendly transport solutions. Designed with advanced safety features, the B9 serves as both a commuter car and a demonstration of innovation in sustainable automotive technology. The company collaborates closely with engineering and research teams at Gunsel City, making the B9 a model of continuous improvement and technological refinement.</p>
            
            <h4>Automotive Research and Development</h4>
            <p>The R&D division of Gunsel Cars operates in synergy with the university’s engineering and design departments, exploring next-generation electric vehicles, battery life optimization, and AI enhancements for autonomous driving. This collaborative approach reinforces Gunsel’s place at the forefront of electric vehicle innovation in the region.</p>
          </section>

          <section className="additional-facilities">
            <h3>Additional Facilities</h3>
            
            <h4>Library and Knowledge Center</h4>
            <p>Gunsel City’s <a href="/library" className="link">library</a> serves as a comprehensive knowledge center, offering extensive resources in digital and print formats for students, researchers, and the public. With specialized collections in science, engineering, and technology, the library is a crucial resource for academic and professional growth, providing access to global research databases,<a href="https://dergi.neu.edu.tr/" target="_blank"className="link">journals </a> , and specialized publications.</p>
            
            <h4>Car Museum</h4>
            <p>The Gunsel <a href="/museum" className="link">Car Museum</a> showcases a historical collection of vehicles, representing the evolution of automotive engineering and design. The museum offers visitors an educational experience in the history of transportation, from early prototypes to modern electric vehicles, and highlights Gunsel Cars Company’s innovations in the field. It serves as an inspiration to students and automotive enthusiasts alike, demonstrating the strides made in sustainable automotive technology.</p>
            
           
          </section>

          <section className="concluding-vision">
            <h3>Concluding Vision</h3>
            <p>Gunsel City Of Arts,Science and Innovation stands as a testament to Near East University’s dedication to innovation, education, and societal advancement. By integrating research, education, and industry, Gunsel City not only supports technological progress but also enriches the academic and professional landscape across the region. Through its laboratories, specialized centers, and the groundbreaking work of Gunsel Cars, Gunsel City continues to drive scientific discovery and economic development.</p>
          </section>
      
        </main>
      </div>
    </>
  );
}

export default Info;
