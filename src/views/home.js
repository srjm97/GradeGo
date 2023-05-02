import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import FeatureCard from '../components/feature-card'
import OutlineBlackButton from '../components/outline-black-button'
import ListItem from '../components/list-item'
import Footer from '../components/footer'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>GradeGo - Student Progress Tracker</title>
        <meta property="og:title" content="GradeGo" />
      </Helmet>
      <Header rootClassName="header-root-class-name"></Header>
      <div className="home-hero">
        <div className="home-container01">
          <div className="home-card">
            <h1 className="home-text HeadingOne">GradeGo</h1>
            <h1 className="home-text01 HeadingOne">Empower Your Learning Journey</h1>
            <span className="home-text02 Lead">
              <span>
              Effortlessly Monitor, Measure, and Maximize Your Academic Success with Our Student Progress Tracker App!
              </span>
            </span>
            <div className="home-container02">
              <div className="home-container03">
                <a href='/contact'><PrimaryPinkButton button="contact us"></PrimaryPinkButton></a>
              </div>
              <OutlineGrayButton button="read more"></OutlineGrayButton>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/curved6-1500w.jpg"
        loading="eager"
        className="home-image04 button list"
      />
      <section className="home-features">
        <FeatureCard
          text="Real-time tracking of your grades, assignments, and performance in one place."
          new_prop="Real-time monitoring"
          image_src="/playground_assets/cube1.svg"
        ></FeatureCard>
        <FeatureCard 
          image_src="/playground_assets/person1.svg"
          text="Gain valuable insights into your strengths and weaknesses."
          new_prop="Personalised insights"
        ></FeatureCard>
        <FeatureCard
          text="Collaborate with classmates and teachers through shared features like assignment tracking."
          new_prop="Collaborative Tools"
          image_src="/playground_assets/rocket1.svg"
        ></FeatureCard>
        <FeatureCard
          text="Set academic goals, create study plans, and receive reminders to stay focused and motivated towards
          your targets."
          new_prop="Goal Setting and Reminders"
          image_src="/playground_assets/credit%20card1.svg"
        ></FeatureCard>
      </section>
      <section className="home-container05">
        <div className="home-container06">
          <h1 className="home-text05 HeadingOne">
            <span className="home-text06">Transform Your Learning Experience: Monitor, Improve, Excel with GradeGo!</span>
          </h1>
          
        </div>
        <div className="home-container07">
          <div className="home-container08">
            <img
              alt="image"
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/laptop.jpg"
              className="home-image05"
            />
            <span className="home-text09 Small">
            <span class="home-text10">
                With the app's monitoring feature, students can effortlessly keep track of their grades, assignments,
                and overall performance in real-time, providing them with a clear picture of their academic progress.
              </span>
              <br />
            </span>
            <div className="home-container09">
              <img
                alt="image"
                src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/coding.jpg"
                className="home-image06"
              />
            </div>
          </div>
          <div className="home-container10">
            <img
              alt="image"
              src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/tasks.jpg"
              className="home-image07"
            />
            <div className="home-container11">
              <h3 className="HeadingTwo">
                <span className="home-text14">
                So what is the need for a Student Progress Tracker application ?
                </span>
              </h3>
              <p class="home-text15">
                <br />
                <span class="home-text16">
                  In today's dynamic educational landscape, the demand for personalized, data-driven, and efficient
                  monitoring of student academic progress is more critical than ever. Students face various challenges,
                  such as managing their time, staying organized, setting academic goals, and engaging parents in their
                  learning journey. This is where a Student Progress Tracker app comes in.
                  <br />
                  <span></span>
                  <br />
                  <span class="home-text19">
                    Firstly, personalized learning is a key aspect of modern education. Every student has unique
                    learning needs and progresses at their own pace. A Student Progress Tracker app can provide
                    personalized insights and feedback on a student's performance, helping them identify their strengths
                    and weaknesses, set goals, and optimize their learning approach accordingly.
                    <br />
                    <br />
                    Secondly, effective time and task management are essential for student success. Keeping track of
                    assignments, exams, and deadlines can be overwhelming. A Student Progress Tracker app can help
                    students stay organized by providing a centralized platform for managing their tasks, deadlines, and
                    assignments, leading to improved time management skills and better academic performance.
                  </span>
                  <br />
                  <span></span>
                  <br />
                  <span class="home-text22">
                    Thirdly, progress monitoring is crucial for students, parents, and educators. A Student Progress
                    Tracker app can provide real-time updates on grades, attendance, and other performance metrics,
                    allowing stakeholders to monitor progress, identify areas for improvement, and intervene early if
                    needed. This enables timely support and intervention to enhance student success.
                  </span>
                </span>
                <br />
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="home-testimonials">
        <div className="home-container12">
          <div className="home-container13">
            <div className="home-container14">
              <h2 className="home-text23 HeadingOne">Excel with us</h2>
              <p className="home-text24 Lead">
                <span className="home-text25">
                  <br />
                  Whatever your qualification is - we got you!
                </span>
              </p>
              <p className="home-text26 Body">
                <span className="home-text27">
                "Education is the foundation upon which we build our future. It is the key that unlocks the door to
                  endless possibilities, empowers individuals to reach their full potential, and transforms communities
                  and societies for the better. With the right tools and resources, students can thrive in their
                  learning journey, parents can be engaged partners, and educators can effectively guide and inspire. A
                  student progress tracker, like the one we've built, is not just a technological solution, but a
                  catalyst for positive change in the lives of students, families, and educators. It's a tool that
                  empowers students to take ownership of their learning, helps parents stay informed and involved, and
                  enables educators to tailor instruction to meet the unique needs of each learner. Our mission is to
                  make education more accessible, personalized, and impactful, and our student progress tracker is a
                  step towards that vision, paving the way for a brighter future where every student can thrive and
                  succeed."
                </span>
              </p>
            </div>
          </div>
        </div>
        <img
          alt="image"
          src="/playground_assets/bottom.svg"
          className="home-bottom-wave-image"
        />
        <img
          alt="image"
          src="/playground_assets/waves-white.svg"
          className="home-image19"
        />
        <img
          alt="image"
          src="/playground_assets/top.svg"
          className="home-top-wave-image"
        />
      </section>
      <section className="home-contaier">
        <div className="home-container31">
          <div className="home-container32">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
            </svg>
          </div>
          <a ></a>
          <h2 className="home-text30 HeadingTwo">
            <span className="home-text31">Beware The Components</span>
          </h2>
          <h3 className="home-text32 HeadingTwo">
            <span className="home-text33">How To Handle Them</span>
            <br></br>
          </h3>
          <span className="home-text34">
            <span className="home-text35">
              We’re constantly trying to express ourselves and actualize our
              dreams. Don&apos;t stop.
            </span>
          </span>
        </div>
        <div className="home-container33">
          <div className="home-container34">
            <div className="home-container35"></div>
            <div className="home-container36">
              <svg viewBox="0 0 987.4285714285713 1024" className="home-icon2">
                <path d="M438.857 508.571l312 312c-79.429 80.571-190.286 130.286-312 130.286-242.286 0-438.857-196.571-438.857-438.857s196.571-438.857 438.857-438.857v435.429zM545.714 512h441.714c0 121.714-49.714 232.571-130.286 312zM950.857 438.857h-438.857v-438.857c242.286 0 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <h1 className="home-text36 HeadingOne">Search and Discover!</h1>
              <span className="home-text37">
                <span>Website visitors</span>
                <span></span>
              </span>
              <OutlineBlackButton button="get started"></OutlineBlackButton>
            </div>
          </div>
          <div className="home-container37">
            <ListItem></ListItem>
            <ListItem
              title="2. Performance Analyze"
              description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
            ></ListItem>
            <ListItem
              title="3. Social Conversions"
              description="Track actions taken on your website that originated from social, and understand the impact on your bottom line."
            ></ListItem>
          </div>
        </div>
        <div className="home-divider"></div>
        <div className="home-container38">
          <div className="home-container39">
            <ListItem
              title="1. Always in Sync"
              description="No matter where you are, Trello stays in sync across all of your devices."
            ></ListItem>
            <ListItem
              title="2. Work With Any Team"
              description="Unify data from Facebook, Instagram, Twitter, LinkedIn, and Youtube to gain rich insights from easy-to-use reports."
            ></ListItem>
            <ListItem
              title="3. A Productivity Platform"
              description="Integrate the apps your team already uses directly into your workflow."
            ></ListItem>
          </div>
          <div className="home-container40">
            <div className="home-container41"></div>
            <div className="home-container42">
              <svg viewBox="0 0 1152 1024" className="home-icon4">
                <path d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"></path>
              </svg>
              <h1 className="home-text40 HeadingOne">Talk and Meet!</h1>
              <span className="home-text41">
                <span>Website visitors</span>
                <span></span>
              </span>
              <OutlineBlackButton button="get started"></OutlineBlackButton>
            </div>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  )
}

export default Home
