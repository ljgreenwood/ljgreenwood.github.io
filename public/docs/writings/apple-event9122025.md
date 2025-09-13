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
