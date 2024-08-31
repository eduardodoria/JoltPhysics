/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "Jolt Physics", "index.html", [
    [ "Architecture of Jolt Physics", "index.html#architecture-jolt-physics", null ],
    [ "Bodies", "index.html#bodies", [
      [ "Types", "index.html#body-types", null ],
      [ "Creating Bodies", "index.html#creating-bodies", null ],
      [ "Multithreaded Access", "index.html#autotoc_md82", null ],
      [ "Single Threaded Access", "index.html#single-threaded-access", null ],
      [ "Shapes", "index.html#shapes", [
        [ "Dynamic Mesh Shapes", "index.html#dynamic-mesh-shapes", null ],
        [ "Creating Shapes", "index.html#creating-shapes", null ],
        [ "Saving Shapes", "index.html#saving-shapes", null ],
        [ "Convex Radius", "index.html#convex-radius", null ],
        [ "Center of Mass", "index.html#center-of-mass", null ],
        [ "Scaling Shapes", "index.html#scaling-shapes", null ],
        [ "Creating Custom Shapes", "index.html#creating-custom-shapes", null ]
      ] ],
      [ "Sensors", "index.html#sensors", null ],
      [ "Sleeping", "index.html#sleeping-bodies", null ],
      [ "Soft Bodies", "index.html#soft-bodies", [
        [ "Soft Body Contact Listeners", "index.html#soft-body-contact-listener", null ],
        [ "Skinning Soft Bodies", "index.html#skinning-soft-bodies", null ],
        [ "Soft Body Work In Progress", "index.html#soft-body-wip", null ]
      ] ]
    ] ],
    [ "Constraints", "index.html#constraints", [
      [ "Constraint Motors", "index.html#constraint-motors", null ],
      [ "Breakable Constraints", "index.html#breakable-constraints", null ]
    ] ],
    [ "Collision Detection", "index.html#collision-detection", [
      [ "Broad Phase", "index.html#broad-phase", null ],
      [ "Narrow Phase", "index.html#narrow-phase", null ],
      [ "Collision Filtering", "index.html#collision-filtering", null ],
      [ "Continuous Collision Detection", "index.html#continuous-collision-detection", null ],
      [ "Ghost Collisions", "index.html#ghost-collisions", null ]
    ] ],
    [ "Character Controllers", "index.html#character-controllers", null ],
    [ "The Simulation Step", "index.html#the-simulation-step", null ],
    [ "Conventions and Limits", "index.html#conventions-and-limits", null ],
    [ "Big Worlds", "index.html#big-worlds", null ],
    [ "Deterministic Simulation", "index.html#deterministic-simulation", null ],
    [ "Rolling Back a Simulation", "index.html#rolling-back-a-simulation", null ],
    [ "Being Sloppy While Still Being Deterministic", "index.html#sloppy-determinism", null ],
    [ "Working With Multiple Physics Systems", "index.html#working-with-multiple-physics-systems", null ],
    [ "Debug Rendering", "index.html#debug-rendering", null ],
    [ "Memory Management", "index.html#memory-management", null ],
    [ "The Simulation Step in Detail", "index.html#the-simulation-step-in-detail", [
      [ "Broad Phase Update Prepare", "index.html#broad-phase-update-prepare", null ],
      [ "Broad Phase Update Finalize", "index.html#broad-phase-update-finalize", null ],
      [ "Step Listeners", "index.html#step-listeners-update", null ],
      [ "Apply Gravity", "index.html#apply-gravity-update", null ],
      [ "Determine Active Constraints", "index.html#determine-active-constraints", null ],
      [ "Build Islands from Constraints", "index.html#build-islands-from-constraints", null ],
      [ "Find Collisions", "index.html#find-collisions", null ],
      [ "Setup Velocity Constraints", "index.html#setup-velocity-constraints", null ],
      [ "Finalize Islands", "index.html#finalize-islands", null ],
      [ "Set Body Island Idx", "index.html#set-body-island-idx", null ],
      [ "Solve Velocity Constraints", "index.html#solve-velocity-constraints", null ],
      [ "Pre Integrate", "index.html#pre-integrate", null ],
      [ "Integrate & Clamp Velocities", "index.html#integrate-and-clamp-velocities", null ],
      [ "Post Integrate", "index.html#post-integrate", null ],
      [ "Find CCD Contacts", "index.html#find-ccd-contacts", null ],
      [ "Resolve CCD Contacts", "index.html#resolve-ccd-contacts", null ],
      [ "Finalize Contact Cache, Contact Removed Callbacks", "index.html#finalize-contact-cache", null ],
      [ "Solve Position Constraints, Update Bodies Broad Phase", "index.html#solve-position-constraints", null ],
      [ "Soft Body Prepare", "index.html#soft-body-prepare", null ],
      [ "Soft Body Collide", "index.html#soft-body-collide", null ],
      [ "Soft Body Simulate", "index.html#soft-body-simulate", null ],
      [ "Soft Body Finalize", "index.html#soft-body-finalize", null ]
    ] ],
    [ "Jolt Physics Samples", "md__docs_2_samples.html", [
      [ "General Controls", "md__docs_2_samples.html#autotoc_md5", null ],
      [ "The Tests", "md__docs_2_samples.html#autotoc_md6", [
        [ "Vehicles", "md__docs_2_samples.html#autotoc_md7", null ],
        [ "Rig (Ragdolls)", "md__docs_2_samples.html#autotoc_md8", null ],
        [ "Soft Body", "md__docs_2_samples.html#autotoc_md9", null ],
        [ "Character", "md__docs_2_samples.html#autotoc_md11", null ],
        [ "Water", "md__docs_2_samples.html#autotoc_md12", null ],
        [ "Constraints", "md__docs_2_samples.html#autotoc_md13", null ],
        [ "General", "md__docs_2_samples.html#autotoc_md14", null ],
        [ "Shapes & Scaled Shapes", "md__docs_2_samples.html#autotoc_md16", null ]
      ] ]
    ] ],
    [ "Performance Test", "md__docs_2_performance_test.html", [
      [ "Commandline options", "md__docs_2_performance_test.html#autotoc_md2", null ],
      [ "Output", "md__docs_2_performance_test.html#autotoc_md3", null ],
      [ "Results", "md__docs_2_performance_test.html#autotoc_md4", null ]
    ] ],
    [ "Release Notes", "md__docs_2_release_notes.html", [
      [ "Unreleased changes", "md__docs_2_release_notes.html#autotoc_md17", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md18", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md19", null ]
      ] ],
      [ "v5.1.0", "md__docs_2_release_notes.html#autotoc_md20", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md21", [
          [ "Soft Body", "md__docs_2_release_notes.html#autotoc_md22", null ],
          [ "HeightField Shape", "md__docs_2_release_notes.html#autotoc_md23", null ],
          [ "Character", "md__docs_2_release_notes.html#autotoc_md25", null ],
          [ "Vehicles", "md__docs_2_release_notes.html#autotoc_md27", null ],
          [ "Various", "md__docs_2_release_notes.html#autotoc_md28", null ]
        ] ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md30", null ]
      ] ],
      [ "v5.0.0", "md__docs_2_release_notes.html#autotoc_md31", [
        [ "New Functionality", "md__docs_2_release_notes.html#autotoc_md32", [
          [ "Soft Body", "md__docs_2_release_notes.html#autotoc_md33", null ],
          [ "Vehicles", "md__docs_2_release_notes.html#autotoc_md35", null ],
          [ "Character", "md__docs_2_release_notes.html#autotoc_md37", null ],
          [ "Constraints", "md__docs_2_release_notes.html#autotoc_md38", null ],
          [ "Collision Detection", "md__docs_2_release_notes.html#autotoc_md40", null ],
          [ "Simulation", "md__docs_2_release_notes.html#autotoc_md41", null ],
          [ "Various", "md__docs_2_release_notes.html#autotoc_md42", null ]
        ] ],
        [ "Removed functionality", "md__docs_2_release_notes.html#autotoc_md44", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md45", null ]
      ] ],
      [ "v4.0.2", "md__docs_2_release_notes.html#autotoc_md47", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md49", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md50", null ]
      ] ],
      [ "v4.0.1", "md__docs_2_release_notes.html#autotoc_md51", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md52", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md53", null ]
      ] ],
      [ "v4.0.0", "md__docs_2_release_notes.html#autotoc_md54", [
        [ "New functionality", "md__docs_2_release_notes.html#autotoc_md55", null ],
        [ "Removed functionality", "md__docs_2_release_notes.html#autotoc_md56", null ],
        [ "New supported platforms", "md__docs_2_release_notes.html#autotoc_md57", null ],
        [ "Bug fixes", "md__docs_2_release_notes.html#autotoc_md58", null ]
      ] ],
      [ "v3.0.0", "md__docs_2_release_notes.html#autotoc_md59", null ],
      [ "v2.0.1", "md__docs_2_release_notes.html#autotoc_md60", null ],
      [ "v2.0.0", "md__docs_2_release_notes.html#autotoc_md61", [
        [ "Major new functionality", "md__docs_2_release_notes.html#autotoc_md62", null ],
        [ "New supported compilers", "md__docs_2_release_notes.html#autotoc_md63", null ],
        [ "New supported platforms", "md__docs_2_release_notes.html#autotoc_md64", null ]
      ] ],
      [ "v1.1.0", "md__docs_2_release_notes.html#autotoc_md65", null ],
      [ "v1.0.0", "md__docs_2_release_notes.html#autotoc_md66", null ]
    ] ],
    [ "Breaking API Changes", "md__docs_2_a_p_i_changes.html", [
      [ "Changes between v5.1.0 and latest", "md__docs_2_a_p_i_changes.html#autotoc_md24", null ],
      [ "Changes between v5.0.0 and v5.1.0", "md__docs_2_a_p_i_changes.html#autotoc_md26", null ],
      [ "Changes between v4.0.2 and v5.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md29", null ],
      [ "Changes between v4.0.0 and v4.0.2", "md__docs_2_a_p_i_changes.html#autotoc_md34", null ],
      [ "Changes between v3.0.1 and v4.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md36", null ],
      [ "Changes between v2.0.1 and v3.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md39", null ],
      [ "Changes between v1.1.0 and v2.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md43", null ],
      [ "Changes between v1.0.0 and v1.1.0", "md__docs_2_a_p_i_changes.html#autotoc_md46", null ],
      [ "Changes between v0.0.0 and v1.0.0", "md__docs_2_a_p_i_changes.html#autotoc_md48", null ]
    ] ],
    [ "Building and Using Jolt Physics", "md__build_2_r_e_a_d_m_e.html", [
      [ "Build Types", "md__build_2_r_e_a_d_m_e.html#autotoc_md69", null ],
      [ "Includes", "md__build_2_r_e_a_d_m_e.html#autotoc_md70", null ],
      [ "Defines", "md__build_2_r_e_a_d_m_e.html#autotoc_md71", null ],
      [ "Logging & Asserting", "md__build_2_r_e_a_d_m_e.html#autotoc_md72", null ],
      [ "Custom Memory Allocator", "md__build_2_r_e_a_d_m_e.html#autotoc_md73", null ],
      [ "Building", "md__build_2_r_e_a_d_m_e.html#autotoc_md74", null ],
      [ "Other Build Tools", "md__build_2_r_e_a_d_m_e.html#autotoc_md75", null ],
      [ "Errors", "md__build_2_r_e_a_d_m_e.html#autotoc_md76", [
        [ "Link Error: File Format Not Recognized", "md__build_2_r_e_a_d_m_e.html#autotoc_md77", null ],
        [ "Link Error: Unresolved External Symbol", "md__build_2_r_e_a_d_m_e.html#autotoc_md78", null ],
        [ "DirectX Error", "md__build_2_r_e_a_d_m_e.html#autotoc_md79", null ],
        [ "Illegal Instruction Error", "md__build_2_r_e_a_d_m_e.html#autotoc_md80", null ]
      ] ],
      [ "Doxygen on Windows", "md__build_2_r_e_a_d_m_e.html#autotoc_md81", null ]
    ] ],
    [ "Projects Using Jolt", "md__docs_2_projects_using_jolt.html", null ],
    [ "Namespaces", "namespaces.html", [
      [ "Namespace List", "namespaces.html", "namespaces_dup" ],
      [ "Namespace Members", "namespacemembers.html", [
        [ "All", "namespacemembers.html", null ],
        [ "Functions", "namespacemembers_func.html", null ],
        [ "Variables", "namespacemembers_vars.html", null ],
        [ "Typedefs", "namespacemembers_type.html", null ],
        [ "Enumerations", "namespacemembers_enum.html", null ],
        [ "Enumerator", "namespacemembers_eval.html", null ]
      ] ]
    ] ],
    [ "Classes", "annotated.html", [
      [ "Class List", "annotated.html", "annotated_dup" ],
      [ "Class Index", "classes.html", null ],
      [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
      [ "Class Members", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Functions", "functions_func.html", "functions_func" ],
        [ "Variables", "functions_vars.html", "functions_vars" ],
        [ "Typedefs", "functions_type.html", null ],
        [ "Enumerations", "functions_enum.html", null ],
        [ "Enumerator", "functions_eval.html", null ],
        [ "Related Symbols", "functions_rela.html", null ]
      ] ]
    ] ],
    [ "Files", "files.html", [
      [ "File List", "files.html", "files_dup" ],
      [ "File Members", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Variables", "globals_vars.html", null ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"_a_a_b_b_tree_builder_8cpp.html",
"_constraint_8h.html#adfc8350888df0c3a51714b7f372baf2dad6af9c1eaff2a89ebd3f8d0c542be12b",
"_height_field_shape_8h_source.html",
"_object_stream_text_out_8h.html",
"_scope_exit_8h.html#a34f8b40943318ef531e67cda41e687b9",
"_swing_twist_constraint_part_8h_source.html",
"class_a_a_box.html#aac4e2dce7616f266b7ef3ae25a9a9aac",
"class_body_creation_settings.html#a871979dfec392313a4fe00760ff9ae07",
"class_box_shape.html#a50c713511a3e73d2c69cb03843eb06e8",
"class_character_base.html#ac6c3f8f7a2492d0c0f2eac85a9cc5a01",
"class_color.html#ab2a95c51874ddeb032fb6c08fd663873",
"class_convex_hull_builder_1_1_face.html",
"class_d_vec3.html#ac071add2c7d9a00bd3f4342198e5aca2",
"class_e_p_a_penetration_depth.html#a8368ab4825b799eb57d6f6cf841087e2",
"class_hinge_constraint.html#ab4edc1ef87211c5b093f9690835bd2c1",
"class_large_island_splitter.html#a3f35114156b5519b85f82988fe3944b9",
"class_motion_properties.html#a8858f397a273114ddc1443880bb5540e",
"class_object_stream_text_in.html#ac9b5883bbe2ef7b8bba215fa2fecf042",
"class_physics_system.html#ae7f5894935da5a4652a6d7ac60ad82e0",
"class_quat.html#ae0e71415ee746c38c27b04e7dbc9b4ed",
"class_rotated_translated_shape.html#abab2852c1625584a5849d7a9ef96efcb",
"class_six_d_o_f_constraint.html#a3e482be52b58ddefa10fd4fe941b4e79",
"class_soft_body_creation_settings.html#a93bf002b1b4ab1fa7bcf846d8116aa91",
"class_sphere_shape_1_1_sphere_with_convex.html",
"class_tapered_capsule_shape.html#a5d84081d417194e6a80742162a9e5361",
"class_triangle_splitter_morton.html#a874a5423ed55acbabc662812a0a5ec4f",
"class_vec8.html#ac6b079a5fb892087e7f29eb49d8de0ed",
"class_wheel.html#acb44fa757ea9d2447e1b2de4f65954ca",
"globals_m.html",
"struct_body_manager_1_1_draw_settings.html#a549281bbff3273af8fc2ee6a1abd5c06",
"struct_lock_free_hash_map_1_1_iterator.html",
"struct_soft_body_shared_settings_1_1_vertex_attributes.html#a2b7dc88022a2596675aa9b551aa67d98"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';