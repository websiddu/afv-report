---
layout: page
title: Report
permalink: /
---

<div class="toc">
<h3> Table of contents </h3>
<ol>
  <li><a href="#chapter-1"><span>Abstract</span></a></li>
  <li><a href="#chapter-2"><span>Introduction </span></a></li>
  <li><a href="#chapter-3"><span>Previous Work, Literature Review &amp; Inspirations</span></a></li>
  <li><a href="chapter-4.xhtml"><span>Design Process and Milestones</span></a>
<ol>
  <li><a href="chapter-4.xhtml#chapter-4-sh1"><span> Proposal</span></a></li>
  <li><a href="chapter-4.xhtml#chapter-4-sh2"><span> Midterm Presentation</span></a></li>
  <li><a href="chapter-4.xhtml#chapter-4-sh3"><span> Interactive Visualization</span></a></li>
  </ol>
    </li>
    <li><a href="chapter-5.xhtml"><span>User Research </span></a>
  <ol>
  <li><a href="chapter-5.xhtml#chapter-5-sh1"><span> Quantitative Survey </span></a></li>
  <li><a href="chapter-5.xhtml#chapter-5-sh2"><span> Survey Process</span></a></li>
  <li><a href="chapter-5.xhtml#chapter-5-sh3"><span> Survey Results and Validation</span></a></li>
  <li><a href="chapter-5.xhtml#chapter-5-sh4"><span> Usability Study </span></a></li>
  <li><a href="chapter-5.xhtml#chapter-5-sh5"><span> Usability Test Goal and Design</span></a></li>
  <li><a href="chapter-5.xhtml#chapter-5-sh6"><span> Usability Test Process </span></a></li>
  <li><a href="chapter-5.xhtml#chapter-5-sh7"><span> Usability Test Results Summary</span></a></li>
  <li><a href="chapter-5.xhtml#chapter-5-sh8"><span> Usability Test Issues List</span></a></li>
</ol>
  </li>
  <li><a href="chapter-6.xhtml"><span>Redesign</span></a></li>
  <li><a href="chapter-7.xhtml"><span>Discussion</span></a></li>
  <li><a href="chapter-8.xhtml"><span>Results</span></a></li>
  <li><a href="chapter-9.xhtml"><span>Further Work</span></a></li>
  <li><a href="chapter-10.xhtml"><span> References</span></a></li>
  <li><a href="chapter-11.xhtml"><span> Appendices </span></a>
    <ol>
      <li><a href="chapter-11.xhtml#chapter-11-sh1"><span> Appendix A: Links to demo and data</span></a></li>
      <li><a href="chapter-11.xhtml#chapter-11-sh2"><span> Appendix B: User research survey</span></a></li>
      <li><a href="chapter-11.xhtml#chapter-11-sh3"><span> Appendix C: Personas</span></a></li>
      <li><a href="chapter-11.xhtml#chapter-11-sh4"><span> Appendix D: Usability test task script</span></a></li>
      <li><a href="chapter-11.xhtml#chapter-11-sh5"><span> Appendix E: Development process</span></a></li>
    </ol>
  </li>
</ol>
</div>


<h3 id='chapter-1'> 1. Abstract </h3>
HCDE 511A presented an opportunity for Team Tesseract to produce a complex interactive visualization. Focusing on trends, makes, and the usage of Alternative Fuel Vehicles in the US, we utilized the UCD process to to create an underlying outline, proposal, and preliminary prototype with Tableau, all whilst incorporating best practices for visualization features. Conducting a user research survey, connecting our goals towards consumer needs, and desiring to have a highly interactive element focused our efforts on creating a multi-tab visualization crafted with D3. This paper will lay out out our design process, challenges, connectivity to the class, and discuss our final visualization which can be found here (http://afvs.me) .

_Categories and Subject Descriptors_<br>
HCDE 511A, Information Visualization<br>
H.5.2 [Information Interfaces and Presentation]: User<br>
Interfaces – Evaluation/methodology, User-centered design.<br>

_General Terms_<br>
Alternative Fuel Vehicles,  Measurement, Design, Experimentation, Human Factors.

_Keywords_<br>
AFV, Alternative Energy, environmentalism, conservation, hybrid, D3, Tableau, user research

<h3 id='chapter-2'> 2. Introduction </h3>
Global warming has been a topic of political and media coverage more and more frequently over the past few years. There is widespread concern that human activity has led to extremely high levels of greenhouse gases in the atmosphere, and that this situation will lead to more extreme weather patterns, polar ice cap melting, and other symptoms with potentially disastrous consequences. Additionally, the price of gasoline has increased dramatically over this same time frame. In 2007, the gasoline price was at its peak. We hypothesize that increased exposure to global warming concerns as well as a higher burden of transportation costs has been a boon for developers of alternative fuel vehicles (AFVs) and that these and other causes have led to increased prevalence of these vehicles over the past two decades.

For this project, we focused on the usage of AFVs in the United States. These vehicles, ranging from common gasoline-electric hybrids and ethanol-85 compatible vehicles to more obscure fuel sources such as compressed natural gas and hydrogen cell, have been increasing in popularity over the past two decades. To support the development of our interactive visualization, we found data sets from multiple sources including the US Department of Energy and the US Energy Information Administration. By combining these data sets, we were able to build a visualization that contains a very large amount of information and that displays this information in novel ways.

Viewing trends in AFV usage brings up many related questions, especially regarding carbon emissions from transportation sources over the same time frame. Although we needed to stay within a reasonable scope for this project, we felt that a limited amount of carbon emissions data would help to give our viewers a reference point and also to add a persuasive element to this visualization.

Our goal is to provide a tool for exploration of information regarding AFVs. Although this structure is open-ended and allows a user to choose their own path through the visualization, we organized our graphs into tabs that move from very broad to more detailed from left to right. This gives a small level of story line to the content and organizes it in a way that is highly understandable.

<h3 id='chapter-3'>3. Previous Work, Literature Review & Inspirations</h3>

As a part of the data discovery and cleaning phase, we explored existing research and presentation of related AFV and fuel sources data. Understanding the pre-existing work of others helped to refine our ideas and research questions, so that we would cover new ground and not simply confirm what already exists. As our data set stems from the Department of Energy and is widely available, there have been some visualizations already conducted with it, though most appear to be static.

The U.S. Energy Information Administration published an interactive visualization using the same data sets with which we began the study. This tool is fairly comprehensive, with graphs for yearly totals of vehicles and fuel consumed, consumption by fuel type, number and fuel consumed by vehicle type, number owned and fuel used by user group, and total vehicles and fuel consumed by state. The interactions support filtering, but nearly all of the graphs are presented as bar charts, with two choropleths provided for the state data. Even though this visualization uses much of the same data and presents similar comparisons, we feel that we have ample opportunity to improve upon the existing tools. A view of this visualization is shown below in Figure 1.



The US EIA provided the data set from the visualization discussed above for download, and it looked to be extremely useful to our needs. However, upon inspection, the data set was not complete and had many missing entries. We emailed the administrator and thankfully received back a complete data set. This provided us with several more years’ worth of data in a format that was already prepared for use in Tableau, so it was very easy to import, combine with our existing data set, and explore.

Figure 2 below illustrates on-road alternative fuel vehicles made available by year. It is an interactive stacked bar graph which users can either select or deselect the index provided on the right. This bar graph inspired us with an effective way to deliver our message. The initial impression on this graph made us think that this was a plain blue bar graph. However, deselecting the ethanol-85 (E85) index provided us with a different insight. We were able to see other fields clearly. In some of our data sets, there are data sets with one distinctive field. For instance, when we were exploring data sets for types of alternative fuels provided, E85 had an extremely high value compared to other fields. In this case, providing a static bar graph would not give users the ability to explore further and would keep key information essentially hidden. In this figure, by unchecking indexes, users can explore each index in depth.

