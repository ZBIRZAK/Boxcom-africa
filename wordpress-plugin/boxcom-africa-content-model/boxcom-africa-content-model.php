<?php
/**
 * Plugin Name: Boxcom Africa Content Model
 * Description: Registers the Boxcom Africa page ACF fields and REST-enabled content types.
 * Version: 1.3.0
 * Author: Boxcom Africa
 * Requires at least: 6.0
 * Requires PHP: 7.4
 */

if (!defined('ABSPATH')) {
    exit;
}

function boxcom_africa_register_content_types() {
    $types = array(
        'service' => array(
            'singular' => 'Service',
            'plural' => 'Services',
            'rest_base' => 'services',
            'slug' => 'services',
            'icon' => 'dashicons-megaphone',
        ),
        'client' => array(
            'singular' => 'Client',
            'plural' => 'Clients',
            'rest_base' => 'clients',
            'slug' => 'clients',
            'icon' => 'dashicons-groups',
        ),
        'project' => array(
            'singular' => 'Project',
            'plural' => 'Projects',
            'rest_base' => 'projects',
            'slug' => 'projects',
            'icon' => 'dashicons-portfolio',
        ),
        'testimonial' => array(
            'singular' => 'Testimonial',
            'plural' => 'Testimonials',
            'rest_base' => 'testimonials',
            'slug' => 'testimonials',
            'icon' => 'dashicons-format-quote',
        ),
        'faq' => array(
            'singular' => 'FAQ',
            'plural' => 'FAQs',
            'rest_base' => 'faqs',
            'slug' => 'faqs',
            'icon' => 'dashicons-editor-help',
        ),
    );

    foreach ($types as $post_type => $config) {
        if (post_type_exists($post_type)) {
            continue;
        }

        register_post_type($post_type, array(
            'labels' => array(
                'name' => $config['plural'],
                'singular_name' => $config['singular'],
                'add_new_item' => 'Add New ' . $config['singular'],
                'edit_item' => 'Edit ' . $config['singular'],
                'all_items' => 'All ' . $config['plural'],
            ),
            'public' => true,
            'show_ui' => true,
            'show_in_menu' => true,
            'show_in_rest' => true,
            'rest_base' => $config['rest_base'],
            'has_archive' => true,
            'rewrite' => array('slug' => $config['slug']),
            'menu_icon' => $config['icon'],
            'supports' => array('title', 'editor', 'excerpt', 'thumbnail', 'page-attributes', 'revisions'),
        ));
    }
}
add_action('init', 'boxcom_africa_register_content_types');

function boxcom_africa_register_acf_fields() {
    if (!function_exists('acf_add_local_field_group')) {
        return;
    }

    acf_add_local_field_group(array(
        'key' => 'group_boxcom_africa_home_hero',
        'title' => 'Home Hero',
        'fields' => array(
            array(
                'key' => 'field_ba_hero',
                'label' => 'Hero',
                'name' => 'hero',
                'type' => 'group',
                'layout' => 'block',
                'sub_fields' => array(
                    array('key' => 'field_ba_hero_first_line', 'label' => 'First Title Line', 'name' => 'frist_title_line', 'type' => 'text'),
                    array('key' => 'field_ba_hero_highlight', 'label' => 'Highlighted Title', 'name' => 'highlighted_title', 'type' => 'text'),
                    array('key' => 'field_ba_hero_third_prefix', 'label' => 'Third Line Prefix', 'name' => 'thrid_line_prefix', 'type' => 'text'),
                    array('key' => 'field_ba_hero_third_emphasis', 'label' => 'Third Line Emphasis', 'name' => 'thrid_line_emphasis', 'type' => 'text'),
                    array('key' => 'field_ba_hero_description', 'label' => 'Description', 'name' => 'description', 'type' => 'textarea', 'rows' => 5, 'new_lines' => ''),
                    array('key' => 'field_ba_hero_poster', 'label' => 'Poster Image', 'name' => 'poster_image', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium', 'library' => 'all'),
                    array('key' => 'field_ba_hero_mp4', 'label' => 'MP4 Video', 'name' => 'mp4_video', 'type' => 'file', 'return_format' => 'array', 'library' => 'all', 'mime_types' => 'mp4'),
                    array('key' => 'field_ba_hero_webm', 'label' => 'WebM Video', 'name' => 'webm_video', 'type' => 'file', 'return_format' => 'array', 'library' => 'all', 'mime_types' => 'webm'),
                ),
            ),
        ),
        'location' => array(array(array('param' => 'page_type', 'operator' => '==', 'value' => 'front_page'))),
        'position' => 'normal',
        'style' => 'default',
        'active' => true,
        'show_in_rest' => 1,
    ));

    acf_add_local_field_group(array(
        'key' => 'group_boxcom_africa_home_sections',
        'title' => 'Home Page Sections',
        'fields' => array(
            array('key' => 'field_ba_insight_tab', 'label' => 'Business Thinking', 'name' => '', 'type' => 'tab'),
            array('key' => 'field_ba_insight_heading', 'label' => 'Heading', 'name' => 'insight_heading', 'type' => 'text'),
            array('key' => 'field_ba_insight_content', 'label' => 'Content', 'name' => 'insight_content', 'type' => 'wysiwyg', 'tabs' => 'all', 'toolbar' => 'basic', 'media_upload' => 0),
            array('key' => 'field_ba_insight_image', 'label' => 'Image', 'name' => 'insight_image', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium', 'library' => 'all'),
            array('key' => 'field_ba_insight_button_label', 'label' => 'Button Label', 'name' => 'insight_button_label', 'type' => 'text'),
            array('key' => 'field_ba_insight_button_link', 'label' => 'Button Link', 'name' => 'insight_button_link', 'type' => 'link', 'return_format' => 'array'),

            array('key' => 'field_ba_services_tab', 'label' => 'Services', 'name' => '', 'type' => 'tab'),
            array('key' => 'field_ba_services_heading', 'label' => 'Heading', 'name' => 'services_heading', 'type' => 'text'),
            array('key' => 'field_ba_services_intro', 'label' => 'Introduction', 'name' => 'services_introduction', 'type' => 'wysiwyg', 'tabs' => 'all', 'toolbar' => 'basic', 'media_upload' => 0),
            array('key' => 'field_ba_services_default', 'label' => 'Default Open Service', 'name' => 'services_default_open', 'type' => 'post_object', 'post_type' => array('service'), 'return_format' => 'id', 'multiple' => 0, 'allow_null' => 1, 'ui' => 1),

            array('key' => 'field_ba_clients_tab', 'label' => 'Clients', 'name' => '', 'type' => 'tab'),
            array('key' => 'field_ba_clients_heading', 'label' => 'Heading', 'name' => 'clients_heading', 'type' => 'text'),

            array('key' => 'field_ba_projects_tab', 'label' => 'Projects', 'name' => '', 'type' => 'tab'),
            array('key' => 'field_ba_projects_heading', 'label' => 'Heading', 'name' => 'projects_heading', 'type' => 'text'),
            array('key' => 'field_ba_projects_button_label', 'label' => 'Button Label', 'name' => 'projects_button_label', 'type' => 'text'),
            array('key' => 'field_ba_projects_button_link', 'label' => 'Button Link', 'name' => 'projects_button_link', 'type' => 'link', 'return_format' => 'array'),

            array('key' => 'field_ba_coverage_tab', 'label' => 'Media Coverage', 'name' => '', 'type' => 'tab'),
            array('key' => 'field_ba_coverage_heading', 'label' => 'Heading', 'name' => 'coverage_heading', 'type' => 'text'),
            array('key' => 'field_ba_coverage_description', 'label' => 'Description', 'name' => 'coverage_description', 'type' => 'textarea', 'rows' => 4, 'new_lines' => 'br'),
            array('key' => 'field_ba_coverage_decorative_image', 'label' => 'Decorative Image', 'name' => 'coverage_decorative_image', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium', 'library' => 'all'),
            array('key' => 'field_ba_coverage_button_label', 'label' => 'Button Label', 'name' => 'coverage_button_label', 'type' => 'text'),
            array('key' => 'field_ba_coverage_button_link', 'label' => 'Button Link', 'name' => 'coverage_button_link', 'type' => 'link', 'return_format' => 'array'),

            array('key' => 'field_ba_testimonials_tab', 'label' => 'Testimonials', 'name' => '', 'type' => 'tab'),
            array('key' => 'field_ba_testimonials_heading', 'label' => 'Heading', 'name' => 'testimonials_heading', 'type' => 'text'),
            array('key' => 'field_ba_testimonials_intro', 'label' => 'Introduction', 'name' => 'testimonials_introduction', 'type' => 'textarea', 'rows' => 4, 'new_lines' => 'br'),
            array('key' => 'field_ba_reviews_image', 'label' => 'Google Reviews Image', 'name' => 'reviews_image', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium', 'library' => 'all'),
            array('key' => 'field_ba_reviews_message', 'label' => 'Google Reviews Message', 'name' => 'reviews_message', 'type' => 'text'),
            array('key' => 'field_ba_reviews_button_label', 'label' => 'Reviews Button Label', 'name' => 'reviews_button_label', 'type' => 'text'),
            array('key' => 'field_ba_reviews_url', 'label' => 'Google Reviews URL', 'name' => 'reviews_url', 'type' => 'url'),

            array('key' => 'field_ba_faq_tab', 'label' => 'FAQ', 'name' => '', 'type' => 'tab'),
            array('key' => 'field_ba_faq_heading', 'label' => 'Heading', 'name' => 'faq_heading', 'type' => 'text'),

            array('key' => 'field_ba_contact_tab', 'label' => 'Contact', 'name' => '', 'type' => 'tab'),
            array('key' => 'field_ba_contact_heading', 'label' => 'Heading', 'name' => 'contact_heading', 'type' => 'text'),
            array('key' => 'field_ba_contact_intro', 'label' => 'Introduction', 'name' => 'contact_introduction', 'type' => 'textarea', 'rows' => 4, 'new_lines' => 'br'),
            array('key' => 'field_ba_contact_map', 'label' => 'Map Embed URL', 'name' => 'contact_map_url', 'type' => 'url'),
            array('key' => 'field_ba_contact_form_id', 'label' => 'Contact Form 7 ID', 'name' => 'contact_form_id', 'type' => 'number', 'min' => 1),
        ),
        'location' => array(array(array('param' => 'page_type', 'operator' => '==', 'value' => 'front_page'))),
        'position' => 'normal',
        'style' => 'default',
        'active' => true,
        'show_in_rest' => 1,
    ));

    $services_page = get_page_by_path('services', OBJECT, 'page');
    if ($services_page) {
        $services_faq_fields = array();
        for ($faq_index = 1; $faq_index <= 4; $faq_index++) {
            $services_faq_fields[] = array(
                'key' => 'field_ba_services_page_faq_' . $faq_index,
                'label' => 'FAQ ' . $faq_index,
                'name' => 'services_page_faq_' . $faq_index,
                'type' => 'group',
                'layout' => 'block',
                'sub_fields' => array(
                    array(
                        'key' => 'field_ba_services_page_faq_' . $faq_index . '_question',
                        'label' => 'Question',
                        'name' => 'question',
                        'type' => 'text',
                    ),
                    array(
                        'key' => 'field_ba_services_page_faq_' . $faq_index . '_answer',
                        'label' => 'Answer',
                        'name' => 'answer',
                        'type' => 'textarea',
                        'rows' => 5,
                        'new_lines' => '',
                    ),
                ),
            );
        }

        acf_add_local_field_group(array(
            'key' => 'group_boxcom_africa_services_page',
            'title' => 'Services Page Content',
            'fields' => array_merge(array(
                array('key' => 'field_ba_services_page_hero_tab', 'label' => 'Hero', 'name' => '', 'type' => 'tab'),
                array('key' => 'field_ba_services_page_hero_first', 'label' => 'Title – First Line', 'name' => 'services_page_hero_first_line', 'type' => 'text', 'default_value' => 'PR Services in'),
                array('key' => 'field_ba_services_page_hero_highlight', 'label' => 'Title – Highlighted Word', 'name' => 'services_page_hero_highlight', 'type' => 'text', 'default_value' => 'Morocco'),
                array('key' => 'field_ba_services_page_hero_suffix', 'label' => 'Title – Last Words', 'name' => 'services_page_hero_suffix', 'type' => 'text', 'default_value' => 'for Africa'),
                array('key' => 'field_ba_services_page_hero_intro', 'label' => 'Introduction', 'name' => 'services_page_hero_introduction', 'type' => 'textarea', 'rows' => 5, 'new_lines' => '', 'default_value' => 'Every brief has its own shape. Sometimes the answer is a focused media push; sometimes it is a PR services program in Morocco that connects content, events, monitoring, social and creators across African markets. We build around the story rather than forcing a fixed package.'),
                array('key' => 'field_ba_services_page_hero_image', 'label' => 'Hero Image', 'name' => 'services_page_hero_image', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium', 'library' => 'all'),

                array('key' => 'field_ba_services_page_catalog_tab', 'label' => 'Services Introduction', 'name' => '', 'type' => 'tab'),
                array('key' => 'field_ba_services_page_catalog_heading', 'label' => 'Heading', 'name' => 'services_page_catalog_heading', 'type' => 'text', 'default_value' => 'Where Should the Work Begin?'),
                array('key' => 'field_ba_services_page_catalog_intro', 'label' => 'Introduction', 'name' => 'services_page_catalog_introduction', 'type' => 'textarea', 'rows' => 4, 'new_lines' => '', 'default_value' => 'Choose the service closest to the immediate need. The wider plan can grow from there if the story calls for it.'),
                array('key' => 'field_ba_services_page_catalog_help', 'label' => 'Service Cards', 'name' => '', 'type' => 'message', 'message' => 'Edit the six service cards from <strong>Services → All Services</strong>. Their title, image, description and order are loaded automatically.'),

                array('key' => 'field_ba_services_page_work_tab', 'label' => 'How the Work Comes Together', 'name' => '', 'type' => 'tab'),
                array('key' => 'field_ba_services_page_work_heading', 'label' => 'Section Heading', 'name' => 'services_page_work_heading', 'type' => 'text', 'default_value' => 'How the Work Comes Together'),
                array('key' => 'field_ba_services_page_work_intro', 'label' => 'Introduction', 'name' => 'services_page_work_introduction', 'type' => 'textarea', 'rows' => 6, 'new_lines' => '', 'default_value' => 'A single launch shows how the disciplines connect: media relations secures the announcement coverage, the event gives journalists direct access, content carries the story into each language and monitoring tells the team how it landed. One story, one direction, several disciplines.'),
                array(
                    'key' => 'field_ba_services_page_work_step_1',
                    'label' => 'Step 1',
                    'name' => 'services_page_work_step_1',
                    'type' => 'group',
                    'layout' => 'block',
                    'sub_fields' => array(
                        array('key' => 'field_ba_services_page_work_step_1_title', 'label' => 'Title', 'name' => 'title', 'type' => 'text', 'default_value' => 'Frame the Brief'),
                        array('key' => 'field_ba_services_page_work_step_1_description', 'label' => 'Description', 'name' => 'description', 'type' => 'textarea', 'rows' => 3, 'new_lines' => '', 'default_value' => 'We clarify the moment, audience, market and pressure points before recommending the work.'),
                    ),
                ),
                array(
                    'key' => 'field_ba_services_page_work_step_2',
                    'label' => 'Step 2',
                    'name' => 'services_page_work_step_2',
                    'type' => 'group',
                    'layout' => 'block',
                    'sub_fields' => array(
                        array('key' => 'field_ba_services_page_work_step_2_title', 'label' => 'Title', 'name' => 'title', 'type' => 'text', 'default_value' => 'Build the Right Team'),
                        array('key' => 'field_ba_services_page_work_step_2_description', 'label' => 'Description', 'name' => 'description', 'type' => 'textarea', 'rows' => 3, 'new_lines' => '', 'default_value' => 'The specialists and local partners needed for the brief work from one direction and one core narrative.'),
                    ),
                ),
                array(
                    'key' => 'field_ba_services_page_work_step_3',
                    'label' => 'Step 3',
                    'name' => 'services_page_work_step_3',
                    'type' => 'group',
                    'layout' => 'block',
                    'sub_fields' => array(
                        array('key' => 'field_ba_services_page_work_step_3_title', 'label' => 'Title', 'name' => 'title', 'type' => 'text', 'default_value' => 'Review What Moved'),
                        array('key' => 'field_ba_services_page_work_step_3_description', 'label' => 'Description', 'name' => 'description', 'type' => 'textarea', 'rows' => 3, 'new_lines' => '', 'default_value' => 'We look at the coverage, sentiment and quality of the response to decide what should happen next.'),
                    ),
                ),

                array('key' => 'field_ba_services_page_faq_tab', 'label' => 'Frequently Asked Questions', 'name' => '', 'type' => 'tab'),
                array('key' => 'field_ba_services_page_faq_heading', 'label' => 'Section Heading', 'name' => 'services_page_faq_heading', 'type' => 'text', 'default_value' => 'Frequently Asked Questions'),
            ), $services_faq_fields, array(
                array('key' => 'field_ba_services_page_contact_tab', 'label' => 'Contact', 'name' => '', 'type' => 'tab'),
                array('key' => 'field_ba_services_page_contact_heading', 'label' => 'Heading', 'name' => 'services_page_contact_heading', 'type' => 'text', 'default_value' => 'Bring Us the Brief'),
                array('key' => 'field_ba_services_page_contact_intro', 'label' => 'Introduction', 'name' => 'services_page_contact_introduction', 'type' => 'textarea', 'rows' => 4, 'new_lines' => '', 'default_value' => 'Describe the immediate need and the market it sits in; we will recommend where the work should begin.'),
                array('key' => 'field_ba_services_page_contact_button', 'label' => 'Button Label', 'name' => 'services_page_contact_button_label', 'type' => 'text', 'default_value' => 'Discuss the Brief'),

                array('key' => 'field_ba_services_page_seo_tab', 'label' => 'SEO', 'name' => '', 'type' => 'tab'),
                array('key' => 'field_ba_services_page_seo_title', 'label' => 'Browser Title', 'name' => 'services_page_seo_title', 'type' => 'text', 'default_value' => 'PR Services in Morocco for Africa | BOXCOM Africa'),
                array('key' => 'field_ba_services_page_seo_description', 'label' => 'Meta Description', 'name' => 'services_page_seo_description', 'type' => 'textarea', 'rows' => 3, 'new_lines' => ''),
            )),
            'location' => array(array(array('param' => 'page', 'operator' => '==', 'value' => (string) $services_page->ID))),
            'position' => 'normal',
            'style' => 'default',
            'label_placement' => 'top',
            'instruction_placement' => 'label',
            'active' => true,
            'show_in_rest' => 1,
        ));
    }

    boxcom_africa_add_content_field_group('service', 'Service Card Details', 'service', array(
        array('key' => 'field_ba_service_label', 'label' => 'Navigation Label', 'name' => 'navigation_label', 'type' => 'text'),
        array('key' => 'field_ba_service_description', 'label' => 'Card Description', 'name' => 'card_description', 'type' => 'textarea', 'rows' => 5, 'new_lines' => 'br'),
        array('key' => 'field_ba_service_page_description', 'label' => 'Services Page Description', 'name' => 'services_page_description', 'type' => 'textarea', 'rows' => 5, 'new_lines' => '', 'instructions' => 'Used on the Services overview page. Leave empty to reuse the homepage card description.'),
        array('key' => 'field_ba_service_image', 'label' => 'Card Image', 'name' => 'card_image', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium', 'library' => 'all'),
        boxcom_africa_home_visibility_field('service'),
    ));

    boxcom_africa_add_content_field_group('client', 'Client Details', 'client', array(
        array('key' => 'field_ba_client_logo', 'label' => 'Logo', 'name' => 'logo', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium', 'library' => 'all'),
        array('key' => 'field_ba_client_website', 'label' => 'Website', 'name' => 'website', 'type' => 'url'),
        array('key' => 'field_ba_client_logo_size', 'label' => 'Logo Size', 'name' => 'logo_size', 'type' => 'select', 'choices' => array('normal' => 'Normal', 'small' => 'Small', 'medium' => 'Medium', 'large' => 'Large'), 'default_value' => 'normal', 'return_format' => 'value'),
        boxcom_africa_home_visibility_field('client'),
    ));

    boxcom_africa_add_content_field_group('project', 'Project Card Details', 'project', array(
        array('key' => 'field_ba_project_category', 'label' => 'Category', 'name' => 'category', 'type' => 'text'),
        array('key' => 'field_ba_project_image', 'label' => 'Card Image', 'name' => 'project_image', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium', 'library' => 'all'),
        array('key' => 'field_ba_project_link', 'label' => 'Case Study Link', 'name' => 'case_study_link', 'type' => 'link', 'return_format' => 'array'),
        boxcom_africa_home_visibility_field('project'),
    ));

    boxcom_africa_add_content_field_group('testimonial', 'Testimonial Details', 'testimonial', array(
        array('key' => 'field_ba_testimonial_company', 'label' => 'Company', 'name' => 'company', 'type' => 'text'),
        array('key' => 'field_ba_testimonial_logo', 'label' => 'Company Logo', 'name' => 'company_logo', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium', 'library' => 'all'),
        array('key' => 'field_ba_testimonial_role', 'label' => 'Person Role', 'name' => 'person_role', 'type' => 'text'),
        array('key' => 'field_ba_testimonial_quote', 'label' => 'Quote', 'name' => 'quote', 'type' => 'textarea', 'rows' => 6, 'new_lines' => 'br'),
        boxcom_africa_home_visibility_field('testimonial'),
    ));

    boxcom_africa_add_content_field_group('faq', 'FAQ Details', 'faq', array(
        array('key' => 'field_ba_faq_answer', 'label' => 'Answer', 'name' => 'answer', 'type' => 'wysiwyg', 'tabs' => 'all', 'toolbar' => 'basic', 'media_upload' => 0),
        boxcom_africa_home_visibility_field('faq'),
    ));

    boxcom_africa_add_content_field_group('media_item', 'Coverage Item Details', 'media-item', array(
        array('key' => 'field_ba_coverage_publication', 'label' => 'Publication Name', 'name' => 'publication_name', 'type' => 'text'),
        array('key' => 'field_ba_coverage_logo', 'label' => 'Publication Logo', 'name' => 'publication_logo', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium', 'library' => 'all'),
        array('key' => 'field_ba_coverage_image', 'label' => 'Coverage Image', 'name' => 'coverage_image', 'type' => 'image', 'return_format' => 'array', 'preview_size' => 'medium', 'library' => 'all'),
        array('key' => 'field_ba_coverage_url', 'label' => 'Article URL', 'name' => 'article_url', 'type' => 'url'),
        array('key' => 'field_ba_coverage_date', 'label' => 'Publication Date', 'name' => 'publication_date', 'type' => 'date_picker', 'display_format' => 'd/m/Y', 'return_format' => 'Y-m-d'),
        boxcom_africa_home_visibility_field('coverage'),
    ));
}
add_action('acf/init', 'boxcom_africa_register_acf_fields');

function boxcom_africa_is_services_page($post) {
    return $post instanceof WP_Post && $post->post_type === 'page' && $post->post_name === 'services';
}

function boxcom_africa_disable_services_block_editor($use_block_editor, $post) {
    return boxcom_africa_is_services_page($post) ? false : $use_block_editor;
}
add_filter('use_block_editor_for_post', 'boxcom_africa_disable_services_block_editor', 10, 2);

function boxcom_africa_hide_services_content_editor($post) {
    if (boxcom_africa_is_services_page($post)) {
        remove_meta_box('postdivrich', 'page', 'normal');
    }
}
add_action('add_meta_boxes_page', 'boxcom_africa_hide_services_content_editor');

function boxcom_africa_register_services_page_endpoint() {
    register_rest_route('boxcom-africa/v1', '/services-page', array(
        'methods' => WP_REST_Server::READABLE,
        'callback' => 'boxcom_africa_get_services_page_endpoint',
        'permission_callback' => '__return_true',
    ));
}
add_action('rest_api_init', 'boxcom_africa_register_services_page_endpoint');

function boxcom_africa_get_services_page_endpoint() {
    $page = get_page_by_path('services', OBJECT, 'page');
    if (!$page) {
        return new WP_Error('boxcom_services_page_missing', 'The Services page does not exist.', array('status' => 404));
    }

    $service_posts = get_posts(array(
        'post_type' => 'service',
        'post_status' => 'publish',
        'posts_per_page' => -1,
        'orderby' => 'menu_order',
        'order' => 'ASC',
    ));
    $services = array_map(function ($service) {
        return array(
            'id' => $service->ID,
            'slug' => $service->post_name,
            'title' => get_the_title($service),
            'menu_order' => (int) $service->menu_order,
            'acf' => function_exists('get_fields') ? (get_fields($service->ID) ?: new stdClass()) : new stdClass(),
        );
    }, $service_posts);

    return rest_ensure_response(array(
        'id' => $page->ID,
        'slug' => $page->post_name,
        'title' => get_the_title($page),
        'acf' => function_exists('get_fields') ? (get_fields($page->ID) ?: new stdClass()) : new stdClass(),
        'services' => $services,
    ));
}

function boxcom_africa_home_visibility_field($suffix) {
    return array(
        'key' => 'field_ba_' . $suffix . '_show_home',
        'label' => 'Display on Homepage',
        'name' => 'show_on_homepage',
        'type' => 'true_false',
        'default_value' => 1,
        'ui' => 1,
    );
}

function boxcom_africa_add_content_field_group($key_suffix, $title, $post_type, $fields) {
    acf_add_local_field_group(array(
        'key' => 'group_boxcom_africa_' . $key_suffix,
        'title' => $title,
        'fields' => $fields,
        'location' => array(array(array('param' => 'post_type', 'operator' => '==', 'value' => $post_type))),
        'position' => 'normal',
        'style' => 'default',
        'active' => true,
        'show_in_rest' => 1,
    ));
}

function boxcom_africa_content_model_missing_acf_notice() {
    if (!current_user_can('activate_plugins') || function_exists('acf_add_local_field_group')) {
        return;
    }

    echo '<div class="notice notice-error"><p><strong>Boxcom Africa Content Model:</strong> Advanced Custom Fields must be active.</p></div>';
}
add_action('admin_notices', 'boxcom_africa_content_model_missing_acf_notice');

function boxcom_africa_content_model_activate() {
    boxcom_africa_register_content_types();
    flush_rewrite_rules();
}
register_activation_hook(__FILE__, 'boxcom_africa_content_model_activate');

function boxcom_africa_content_model_deactivate() {
    flush_rewrite_rules();
}
register_deactivation_hook(__FILE__, 'boxcom_africa_content_model_deactivate');
