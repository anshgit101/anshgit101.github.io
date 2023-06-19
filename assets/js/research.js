/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Improving IoT-based Smart Retrofit Model for Analog Water Meters using DL based Algorithm",
    authors:
      "Ayush Kumar Lall, Ansh Khandelwal, Nitin Nilesh and Sachin Chaudhari",
    conferences:
      "2022 9th International Conference on Future Internet of Things and Cloud (FiCloud)",
    researchYr: 2022,
    citebox: "popup1",
    image: "assets/images/research-page/pp1.png",
    citation: {
      vancouver:
        "A. K. Lall, A. Khandelwal, N. Nilesh and S. Chaudhari, Improving IoT-based Smart Retrofit Model for Analog Water Meters using DL based Algorithm, 2022 9th International Conference on Future Internet of Things and Cloud (FiCloud), Rome, Italy, 2022, pp. 207-212, doi: 10.1109/FiCloud57274.2022.00035.",
    },
    abstract:
      "This paper proposes a deep learning (DL)-based algorithm which is used for improving the performance of digit detection from internet-of-things (IoT)-based analog water meters. The DL algorithm is trained on a rich dataset of over 160,000 images collected from six water nodes deployed at locations with different environmental conditions. A detailed comparison between the proposed DL and machine learning (ML) algorithm is made based on detection accuracy, feature analysis, error analysis, and computational complexity analysis. It is observed that compared to the ML model, the proposed DL model maintained a higher detection accuracy and is more generalized in terms of feature extraction, which makes the algorithm robust.",
    absbox: "absPopup1",
  },

  {
    title: "Making Analog Water Meter Smart using ML and IoT-based Low-Cost Retrofitting",
    authors:
      "Ayush Kumar Lall, Ansh Khandelwal, Rishi Bose, Nilesh Bawankar, Nitin Nilesh, Ayush Dwivedi and Sachin Chaudhari",
    conferences:
      "2021 8th International Conference on Future Internet of Things and Cloud (FiCloud)",
    researchYr: 2021,
    citebox: "popup2",
    image: "assets/images/research-page/pp2.png",
    citation: {
      vancouver:
      "A. K. Lall et al., Making Analog Water Meter Smart using ML and IoT-based Low-Cost Retrofitting, 2021 8th International Conference on Future Internet of Things and Cloud (FiCloud), Rome, Italy, 2021, pp. 157-162, doi: 10.1109/FiCloud49777.2021.00030.",
    },
    abstract:
      "This paper introduces an internet-of-things (IoT) based economic retrofitting setup for digitising the analog water meters to make them smart. The setup contains a Raspberry-Pi microcontroller and a Pi-camera mounted on top of the analog water meter to take its images. The captured images are then preprocessed to estimate readings using a machine learning (ML) model. The employed ML algorithm is trained on a rich dataset that includes digits from the images of water meters captured by the hardware setup for ten days. The readings are posted on a cloud server in real-time using Raspberry-Pi. High temporal resolution plots of flow rate and volume are generated to derive inferences. The collected data can be used for deriving water consumption patterns and fault detection for efficient water management.",
    absbox: "absPopup2",
  },

  {
    title: "System and Method for Digitizing in an Analog Water Meter using Machine Learning",
    authors:
      "Ayush Kumar Lall, Ansh Khandelwal, Rishi Bose, Nilesh Bawankar, Nitin Nilesh, Ayush Dwivedi and Sachin Chaudhari",
    conferences:
      "Indian Patent Office",
    researchYr: 2022,
    citebox: "popup2",
    image: "assets/images/research-page/pp3.png",
    citation: {
      vancouver:
      "A. K. Lall et al., Making Analog Water Meter Smart using ML and IoT-based Low-Cost Retrofitting, 2021 8th International Conference on Future Internet of Things and Cloud (FiCloud), Rome, Italy, 2021, pp. 157-162, doi: 10.1109/FiCloud49777.2021.00030.",
    },
    abstract:
      "A retrofit system 100 and method for digitizing in an analog water meter using a machine learning model are provided. The retrofit system 100 includes a controller 102, a power supply module 104, a server 106, an image capturing device 108, a machine learning model 110, a light module 112, and a relay module 114. The image capturing device 108 captures one or more images of dial of the analog water meter. The light module 112 provides illumination to the image capturing device 108. The relay module 114 controls the light module 112. The power module 104 enables power to the retrofit system 100 without any interruption. The controller 102 detects reading of the analog water meter from the captured one or more images. The server 106 aggregates the detected readings and processes the aggregated data to digitize in the readings using machine learning model 110.",
    absbox: "absPopup2",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
