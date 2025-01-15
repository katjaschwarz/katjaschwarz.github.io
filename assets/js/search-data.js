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
        },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-gallery/";
        
      },
    },{id: "post-a-post-with-tabs",
      
        title: "a post with tabs",
      
      description: "this is what included tabs in a post could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/tabs/";
        
      },
    },{id: "post-a-post-with-typograms",
      
        title: "a post with typograms",
      
      description: "this is what included typograms code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/typograms/";
        
      },
    },{id: "post-a-post-that-can-be-cited",
      
        title: "a post that can be cited",
      
      description: "this is what a post that can be cited looks like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/post-citation/";
        
      },
    },{id: "post-a-post-with-pseudo-code",
      
        title: "a post with pseudo code",
      
      description: "this is what included pseudo code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/pseudocode/";
        
      },
    },{id: "post-a-post-with-code-diff",
      
        title: "a post with code diff",
      
      description: "this is how you can display code diffs",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/code-diff/";
        
      },
    },{id: "post-a-post-with-advanced-image-components",
      
        title: "a post with advanced image components",
      
      description: "this is what advanced image components could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/advanced-images/";
        
      },
    },{id: "post-a-post-with-vega-lite",
      
        title: "a post with vega lite",
      
      description: "this is what included vega lite code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/vega-lite/";
        
      },
    },{id: "post-a-post-with-geojson",
      
        title: "a post with geojson",
      
      description: "this is what included geojson code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/geojson-map/";
        
      },
    },{id: "post-a-post-with-echarts",
      
        title: "a post with echarts",
      
      description: "this is what included echarts code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/echarts/";
        
      },
    },{id: "post-a-post-with-chart-js",
      
        title: "a post with chart.js",
      
      description: "this is what included chart.js code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/chartjs/";
        
      },
    },{id: "post-a-post-with-tikzjax",
      
        title: "a post with TikZJax",
      
      description: "this is what included TikZ code could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tikzjax/";
        
      },
    },{id: "post-a-post-with-bibliography",
      
        title: "a post with bibliography",
      
      description: "an example of a blog post with bibliography",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/post-bibliography/";
        
      },
    },{id: "post-a-post-with-jupyter-notebook",
      
        title: "a post with jupyter notebook",
      
      description: "an example of a blog post with jupyter notebook",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/jupyter-notebook/";
        
      },
    },{id: "post-a-post-with-custom-blockquotes",
      
        title: "a post with custom blockquotes",
      
      description: "an example of a blog post with custom blockquotes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/custom-blockquotes/";
        
      },
    },{id: "post-a-post-with-table-of-contents-on-a-sidebar",
      
        title: "a post with table of contents on a sidebar",
      
      description: "an example of a blog post with table of contents on a sidebar",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/sidebar-table-of-contents/";
        
      },
    },{id: "post-a-post-with-audios",
      
        title: "a post with audios",
      
      description: "this is what included audios could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/audios/";
        
      },
    },{id: "post-a-post-with-videos",
      
        title: "a post with videos",
      
      description: "this is what included videos could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/videos/";
        
      },
    },{id: "post-displaying-beautiful-tables-with-bootstrap-tables",
      
        title: "displaying beautiful tables with Bootstrap Tables",
      
      description: "an example of how to use Bootstrap Tables",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/tables/";
        
      },
    },{id: "post-a-post-with-table-of-contents",
      
        title: "a post with table of contents",
      
      description: "an example of a blog post with table of contents",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/table-of-contents/";
        
      },
    },{id: "post-a-post-with-giscus-comments",
      
        title: "a post with giscus comments",
      
      description: "an example of a blog post with giscus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/giscus-comments/";
        
      },
    },{id: "post-a-post-with-redirect",
      
        title: "a post with redirect",
      
      description: "you can also redirect to assets like pdf",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/assets/pdf/example_pdf.pdf";
        
      },
    },{id: "post-a-post-with-diagrams",
      
        title: "a post with diagrams",
      
      description: "an example of a blog post with diagrams",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/diagrams/";
        
      },
    },{id: "post-a-distill-style-blog-post",
      
        title: "a distill-style blog post",
      
      description: "an example of a distill-style blog post and main elements",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/distill/";
        
      },
    },{id: "post-a-post-with-github-metadata",
      
        title: "a post with github metadata",
      
      description: "a quick run down on accessing github metadata.",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/github-metadata/";
        
      },
    },{id: "post-a-post-with-twitter",
      
        title: "a post with twitter",
      
      description: "an example of a blog post with twitter",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/twitter/";
        
      },
    },{id: "post-a-post-with-disqus-comments",
      
        title: "a post with disqus comments",
      
      description: "an example of a blog post with disqus comments",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/disqus-comments/";
        
      },
    },{id: "post-a-post-with-math",
      
        title: "a post with math",
      
      description: "an example of a blog post with some math",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/math/";
        
      },
    },{id: "post-a-post-with-code",
      
        title: "a post with code",
      
      description: "an example of a blog post with some code",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/code/";
        
      },
    },{id: "post-a-post-with-images",
      
        title: "a post with images",
      
      description: "this is what included images could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/images/";
        
      },
    },{id: "post-a-post-with-formatting-and-links",
      
        title: "a post with formatting and links",
      
      description: "march &amp; april, looking forward to summer",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/formatting-and-links/";
        
      },
    },{id: "news-our-paper-on-3d-controllable-image-synthesis-got-accepted-at-cvpr-2020",
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
