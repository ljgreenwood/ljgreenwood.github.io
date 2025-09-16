# MISC Career Notes

* AI-Focused Neural Engine now on SoC

Architecture - Algorithms & Research - AI-Focused :: Forward-view

Functional Design - RTL verilog
Functional Verification - DV via UVM, C++ reference model of design. Functional model compared to Functional design.

Physical Design - Cadence Synopsis - GDSII for fabrication :: CAD tool understanding, 

Technology and Circuits : Device physics heavy

Product Test - device physics and yield rate optimization


GPU Architecture at Apple:
- 

look up:
CPU - instruction level parallelism
Register Renaming : 
caching algorithms in GPU vs CPU L1 vs L2 :: VRAM/DRAM - shared DRAM at Apple?
Speculation : CPU (scheduling and branch prediction - out of order /reorder buffers)

HWT-UF-Careers@group.apple.com

Tim Ganley :: site R&D @ Orlando

Hanley : DV

Melissa - Design :: Microarchitecture '98 grad

Scott Brandt - 2001 :: frontend RTL manager melbourne

Jim Fuchs - Manager / Site lead + Raleigh/Boston (37 years industry - digital design)

Kevin Phillipsen - RTL DigiDesign - Melbourne - Layout team in Melbourne as well

Alex Kozsmicki - Frontend RTL

Classes :
- Reconfig 1-2
- systemVerilog experience


downsides:
sharing page tables between CPU and GPU (Unified Memory Architecture)
advantagous to have uma to have handover between apps running on the cpu and gpu (AI)

RTOS :: bandwidth requirements - bypass/virtual channels - priority scheduling in order to match framerate etc.

Undergrad VLSI classes VLSI 2 - design compilation

Post-silicon tester should have the same knowledge as a designer - with programming skill focus

Place and Route - O

place and route is a very big part of GPU design

functional modeling - requires comp arch but c++ is the deliverable so (DV) :: swe practices are used

fingerprint security architecture is old:
- alternatives? differential powerhouse evaluations

experience with failure triage debug process and how that differs among teams - does it differ.

how has adding a neural core to the SoC changed the work that the GPU team does?

ARM interconnects are similar to apple interconnects - implementing their own ARM-based bus systems

constraint random testing - complex pipelining system makes UVM verification difficult :: build test benches at each level - then connect these - vertically reuse verification at higher levels - building in redundancy - many checks at every level ; fpgas used to emulate gpu cores to test

functional model - software generates traces of issues

virtualization : virtual memory
& increasing programmability of gpu

GPU methodology is a scalable design - not too much device-to-device optimization 

Core ISA used?

not exhaustive due to complexity - but focus on the primary areas - minor issues after fab may use a combination of hardware/software

integrating more programmable gpus again effects the design - not fixed vertex shading etc

MLX - with CUDA backing

micron

ti

solidigm

sandia nat lab

short presentations before one-on-one breakouts

Bank of America Global Technology Summer Analyst Program:
* SQL, Java, Python, JS, C# or C++, .NET, HTML, Linux/Unix, Angular/Oracle
* Agile
* Tableau, Hadoop, JIRA, Confluence, Excel, Visio
* R, Scala, Spark, PowerBI, Splunk
* MERN
* Programmable Logic Controller (PLC)
* EC2 Instances AWS
* Azure Stack
* Datadog
* Pinecone Vector Database
* DSA, Operating Systems, Distributed Systems, Computer Networks, Computer Systems Security, Machine Learning, Applied Cryptography, Compilers, Advanced Probabalistic Algorithms, Design and Analysis of Algorithms, Statistics, Convex Optimization, Linear Algebra, Cryptography, Number Theory, Galois Theory, Abstract Algebra, Complex Analysis, Multivariable Calculus, Real Analysis.

* RESTful APIs, Angular, Kafka data pipeline, Small-Language Model. JUnit and Jest *C/x86_64 programs, testing for forkbombs and disk space consumption B+Tree file system
* TypeScript & SQL
* PyCryptoDome
* Formal Logic. Partially Observable Markov Decision Processes (reinforcement learning)
* Node.js and leaflet.js, react and mongoDB.
* Lenstra's Elliptic Curve Factorization Algorithm
* CryptoPP, multiple candidate voting protocol (zkp)
* Weenix, C/x86_64, building unix-based os kernel from scratch that can run C programs.
* Go, OCaml, Flask, Spring, Jenkins, Maven, LiquiBase, Kubernetes, .NET, Docker, Postman, BitBucket, Swagger

* https://www.databricks.com/
* R, RPA, Power Automate

ONR BOEM NOAA USGS

Marine Facilities Planning

Projects:	
mnist keras
Script rotating spikey screensaver ascii
Chaos theory : simulate weather
Design Personal Website
Web Scraper
Bash/Python Scripts
Recreate an existing project by studying a codebase
Instance segmentation image processing project (GIS related)

GENUARY!
Svelte

* Quantum
* Hardware Programming
* Algorithmic Circuit Design
* Optics && Optical Computing
* OS Design
* Signal Processing
* Compression
* Encryption
* Control Algorithms
* Numerical Methods
* Proof Writing && Proof Writing Programs
* Cryptography
* Topology (non-Euclidean geometry)

ASML SWE
* C, CPP, Python, Assembly
* Software models how the patterns print on a wafer and tune system for higher precision
* mask optimizations correct for optical effects
* optic filtering adjusts for heat / light deformation