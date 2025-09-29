// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-generative-gaussian-splatting",
          title: "Generative Gaussian Splatting",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/ggs/";
          },
        },{id: "nav-voxgraf",
          title: "VoxGRAF",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/voxgraf/";
          },
        },{id: "nav-wildfusion",
          title: "WildFusion",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/wildfusion/";
          },
        },{id: "nav-a-recipe-for-generating-3d-worlds-from-a-single-image",
          title: "A Recipe for Generating 3D Worlds From a Single Image",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/worlds/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-paper-on-3d-controllable-image-synthesis-got-accepted-at-cvpr-2020",
          title: 'Our paper on 3D-controllable image synthesis got accepted at CVPR 2020.',
          description: "",
          section: "News",},{id: "news-our-graf-paper-was-accepted-at-neurips-2020",
          title: 'Our GRAF paper was accepted at NeurIPS 2020.',
          description: "",
          section: "News",},{id: "news-i-was-selected-to-participate-in-the-ki-camp-organized-by-the-federal-ministry-of-education-and-research-bmbf-and-the-german-informatics-society-gi",
          title: 'I was selected to participate in the KI Camp organized by the Federal...',
          description: "",
          section: "News",},{id: "news-i-was-elected-student-representative-of-our-imprs-is-grad-school",
          title: 'I was elected student representative of our IMPRS-IS grad school.',
          description: "",
          section: "News",},{id: "news-i-was-invited-to-give-a-talk-at-nvidia-gtc-gpu-technology-conference",
          title: 'I was invited to give a talk at Nvidia GTC - GPU Technology...',
          description: "",
          section: "News",},{id: "news-i-was-featured-in-the-podcast-generally-intelligent-by-kanjun-qiu-and-josh-albrecht-we-cover-the-role-3d-generation-plays-in-conceptual-understanding-continuous-functions-as-representations-for-3d-objects-and-tons-of-practical-tips-on-gan-training",
          title: 'I was featured in the Podcast Generally Intelligent by Kanjun Qiu and Josh...',
          description: "",
          section: "News",},{id: "news-our-paper-on-the-frequency-bias-of-generative-models-was-accepted-at-neurips-2021",
          title: 'Our paper On the Frequency Bias of Generative Models was accepted at NeurIPS...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-about-3d-aware-generative-models-at-the-iccv-workshop-for-differentiable-3d-vision-and-graphics",
          title: 'I gave a talk about 3D-aware generative models at the ICCV workshop for...',
          description: "",
          section: "News",},{id: "news-our-graf-paper-won-the-award-for-the-most-promising-scientific-performance-at-aigamedev",
          title: 'Our GRAF paper won the award for the most promising scientific performance at...',
          description: "",
          section: "News",},{id: "news-our-stylegan-xl-paper-was-accepted-at-siggraph-22",
          title: 'Our StyleGAN-XL paper was accepted at SIGGRAPH’22!',
          description: "",
          section: "News",},{id: "news-i-am-excited-to-join-the-toronto-ai-lab-at-nvidia-for-an-internship-this-summer",
          title: 'I am excited to join the Toronto AI Lab at Nvidia for an...',
          description: "",
          section: "News",},{id: "news-our-arah-paper-was-accepted-at-eccv-22",
          title: 'Our ARAH paper was accepted at ECCV’22!',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-about-3d-aware-image-synthesis-at-the-wacv-workshop-on-photorealistic-image-and-environment-synthesis-for-computer-vision",
          title: 'I gave a talk about 3D-aware image synthesis at the WACV workshop on...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-on-3d-content-generation-at-eth-s-geomatics-online-seminar-geomatics-online-seminar",
          title: 'I gave a talk on 3D-content generation at ETH’s Geomatics online Seminar Geomatics...',
          description: "",
          section: "News",},{id: "news-i-gave-a-talk-on-3d-aware-generative-models-at-the-cvpr-workshop-on-high-fidelity-neural-actors",
          title: 'I gave a talk on 3D-aware generative models at the CVPR workshop on...',
          description: "",
          section: "News",},{id: "news-i-participated-in-the-birs-workshop-on-3d-generative-models",
          title: 'I participated in the BIRS workshop on 3D Generative Models',
          description: "",
          section: "News",},{id: "news-i-visited-the-mpi-for-informatics-and-gave-a-talk-on-3d-aware-image-synthesis-with-latent-diffusion-models",
          title: 'I visited the MPI for Informatics and gave a talk on 3D-aware Image...',
          description: "",
          section: "News",},{id: "news-i-joined-meta-as-a-research-scientist",
          title: 'I joined Meta as a Research Scientist!',
          description: "",
          section: "News",},{id: "news-our-paper-wildfusion-was-accepted-at-iclr",
          title: 'Our paper WildFusion was accepted at ICLR!',
          description: "",
          section: "News",},{id: "news-our-multidiff-paper-was-accepted-at-cvpr",
          title: 'Our MultiDiff paper was accepted at CVPR',
          description: "",
          section: "News",},{id: "news-i-joined-spaitial-to-push-the-limits-of-world-models",
          title: 'I joined SpAItial to push the limits of world models.',
          description: "",
          section: "News",},{id: "news-i-give-a-talk-on-building-worlds-from-noise-at-the-cvpr-scannet-workshop",
          title: 'I give a talk on “Building Worlds from Noise” at the CVPR ScanNet++...',
          description: "",
          section: "News",},{id: "news-three-papers-accepted-to-iccv",
          title: 'Three papers accepted to ICCV!',
          description: "",
          section: "News",},{id: "news-i-m-excited-to-be-on-the-panel-of-the-fireside-chat-with-generative-ai-founders-by-the-tübingen-ai-center",
          title: 'I’m excited to be on the panel of the Fireside Chat with Generative...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},];
