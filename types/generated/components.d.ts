import type { Schema, Struct } from '@strapi/strapi';

export interface BlogBlogAuthorSection extends Struct.ComponentSchema {
  collectionName: 'components_blog_blog_author_sections';
  info: {
    displayName: 'BlogAuthorSection';
    icon: 'bulletList';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    bio: Schema.Attribute.String;
    name: Schema.Attribute.String;
  };
}

export interface BlogBlogContentSection extends Struct.ComponentSchema {
  collectionName: 'components_blog_blog_content_sections';
  info: {
    displayName: 'BlogContentSection';
  };
  attributes: {
    anchor: Schema.Attribute.String & Schema.Attribute.Required;
    content: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image_alt: Schema.Attribute.String;
    image_caption: Schema.Attribute.String;
  };
}

export interface BlogBlogFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_blog_blog_faq_sections';
  info: {
    displayName: 'BlogFAQSection';
    icon: 'bulletList';
  };
  attributes: {};
}

export interface BlogBlogHeroSection extends Struct.ComponentSchema {
  collectionName: 'components_blog_blog_hero_sections';
  info: {
    displayName: 'BlogHeroSection';
    icon: 'bulletList';
  };
  attributes: {
    excerpt: Schema.Attribute.Text;
    featured_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    link_url: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface BlogBlogIndexLayoutSection extends Struct.ComponentSchema {
  collectionName: 'components_blog_blog_index_layout_sections';
  info: {
    displayName: 'BlogIndexLayoutSection';
  };
  attributes: {
    latest_limit: Schema.Attribute.Integer;
    posts_per_category: Schema.Attribute.Integer;
    show_category_section: Schema.Attribute.Boolean &
      Schema.Attribute.DefaultTo<true>;
    show_latest: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
  };
}

export interface BlogBlogTableOfContentsSection extends Struct.ComponentSchema {
  collectionName: 'components_blog_blog_table_of_contents_sections';
  info: {
    displayName: 'BlogTableOfContentsSection';
  };
  attributes: {
    items: Schema.Attribute.Component<'blog.blog-toc-item', true>;
    title: Schema.Attribute.String;
  };
}

export interface BlogBlogTocItem extends Struct.ComponentSchema {
  collectionName: 'components_blog_blog_toc_items';
  info: {
    displayName: 'BlogTOCItem';
  };
  attributes: {
    anchor: Schema.Attribute.String & Schema.Attribute.Required;
    label: Schema.Attribute.String & Schema.Attribute.Required;
    order: Schema.Attribute.Integer;
  };
}

export interface BlogFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_blog_faq_items';
  info: {
    displayName: 'FAQItem';
    icon: 'bulletList';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface BlogGallerySection extends Struct.ComponentSchema {
  collectionName: 'components_blog_gallery_sections';
  info: {
    displayName: 'GallerySection';
  };
  attributes: {
    caption: Schema.Attribute.String;
    images: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
  };
}

export interface BlogImageSection extends Struct.ComponentSchema {
  collectionName: 'components_blog_image_sections';
  info: {
    displayName: 'ImageSection';
  };
  attributes: {
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    image_alt: Schema.Attribute.String;
    image_caption: Schema.Attribute.String;
  };
}

export interface BlogQuoteSection extends Struct.ComponentSchema {
  collectionName: 'components_blog_quote_sections';
  info: {
    displayName: 'QuoteSection';
  };
  attributes: {
    author: Schema.Attribute.Relation<'oneToOne', 'api::author.author'>;
    position: Schema.Attribute.String;
    quote: Schema.Attribute.String;
  };
}

export interface BlogTableSection extends Struct.ComponentSchema {
  collectionName: 'components_blog_table_sections';
  info: {
    displayName: 'TableSection';
  };
  attributes: {
    caption: Schema.Attribute.String;
    table: Schema.Attribute.RichText;
  };
}

export interface BlogTextSection extends Struct.ComponentSchema {
  collectionName: 'components_blog_text_sections';
  info: {
    displayName: 'TextSection';
  };
  attributes: {
    text: Schema.Attribute.RichText;
  };
}

export interface BlogVideoSection extends Struct.ComponentSchema {
  collectionName: 'components_blog_video_sections';
  info: {
    displayName: 'VideoSection';
  };
  attributes: {
    caption: Schema.Attribute.String;
    url: Schema.Attribute.String;
    url_upload: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface HomeBlogHighlightSection extends Struct.ComponentSchema {
  collectionName: 'components_home_blog_highlight_sections';
  info: {
    displayName: 'BlogHighlightSection';
  };
  attributes: {
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
  };
}

export interface HomeBullet extends Struct.ComponentSchema {
  collectionName: 'components_home_bullets';
  info: {
    displayName: 'Bullet';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface HomeHeroSlide extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_slides';
  info: {
    displayName: 'HeroSlide';
    icon: 'bulletList';
  };
  attributes: {
    background_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    heading: Schema.Attribute.String;
    primary_cta_link: Schema.Attribute.String;
    primary_cta_text: Schema.Attribute.String;
    subheading: Schema.Attribute.String;
  };
}

export interface HomeHeroSliderSection extends Struct.ComponentSchema {
  collectionName: 'components_home_hero_slider_sections';
  info: {
    displayName: 'HeroSliderSection';
    icon: 'bulletList';
  };
  attributes: {
    slides: Schema.Attribute.Component<'home.hero-slide', true>;
  };
}

export interface HomePartner extends Struct.ComponentSchema {
  collectionName: 'components_home_partners';
  info: {
    displayName: 'Partner';
    icon: 'bulletList';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
  };
}

export interface HomePartnersSection extends Struct.ComponentSchema {
  collectionName: 'components_home_partners_sections';
  info: {
    displayName: 'PartnersSection';
    icon: 'bulletList';
  };
  attributes: {
    heading: Schema.Attribute.String;
    partners: Schema.Attribute.Component<'home.partner', true>;
  };
}

export interface HomeServiceCard extends Struct.ComponentSchema {
  collectionName: 'components_home_service_cards';
  info: {
    displayName: 'ServiceCard';
  };
  attributes: {
    image: Schema.Attribute.String;
    service_type: Schema.Attribute.Enumeration<['pillar', 'cluster']>;
    short_description: Schema.Attribute.String;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface HomeServiceListSection extends Struct.ComponentSchema {
  collectionName: 'components_home_service_list_sections';
  info: {
    displayName: 'ServiceListSection';
  };
  attributes: {
    heading: Schema.Attribute.String;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
  };
}

export interface HomeTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonials';
  info: {
    displayName: 'Testimonial';
    icon: 'bulletList';
  };
  attributes: {
    avatar: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name: Schema.Attribute.String;
    quote: Schema.Attribute.String;
    role: Schema.Attribute.String;
  };
}

export interface HomeTestimonialSection extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonial_sections';
  info: {
    displayName: 'TestimonialSection';
    icon: 'bulletList';
  };
  attributes: {
    heading: Schema.Attribute.String;
    testimonials: Schema.Attribute.Component<'home.testimonial', true>;
  };
}

export interface HomeTryForFreeSection extends Struct.ComponentSchema {
  collectionName: 'components_home_try_for_free_sections';
  info: {
    displayName: 'TryForFreeSection';
  };
  attributes: {
    bullets: Schema.Attribute.Component<'home.bullet', true>;
    description: Schema.Attribute.Text;
    heading: Schema.Attribute.String;
  };
}

export interface HomeWhyChooseUsItem extends Struct.ComponentSchema {
  collectionName: 'components_home_why_choose_us_items';
  info: {
    displayName: 'WhyChooseUsItem';
  };
  attributes: {
    description: Schema.Attribute.String;
    icon_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    icon_type: Schema.Attribute.Enumeration<
      [
        'fast',
        'price',
        'support',
        'quality',
        'time',
        'engagement',
        'features',
        'emotion',
        'visual',
        'social',
        'warm_light',
        'sunset',
        'depth',
        'timeless',
        'cleaner',
        'spacious',
        'highlight',
        'neutral',
        'boost',
        'twilight',
        'details',
        'color',
        'no_glare',
      ]
    >;
    title: Schema.Attribute.String;
  };
}

export interface HomeWhyChooseUsSection extends Struct.ComponentSchema {
  collectionName: 'components_home_why_choose_us_sections';
  info: {
    displayName: 'WhyChooseUsSection';
    icon: 'bulletList';
  };
  attributes: {
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'home.why-choose-us-item', true>;
  };
}

export interface SectionsAudienceItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_audience_items';
  info: {
    displayName: 'AudienceItem';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SectionsAudienceSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_audience_sections';
  info: {
    displayName: 'AudienceSection';
    icon: 'bulletList';
  };
  attributes: {
    audiences: Schema.Attribute.Component<'sections.audience-item', true>;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsBulletItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_bullet_items';
  info: {
    displayName: 'BulletItem';
    icon: 'bulletList';
  };
  attributes: {
    text: Schema.Attribute.String;
  };
}

export interface SectionsBulletListSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_bullet_list_sections';
  info: {
    displayName: 'BulletListSection';
    icon: 'bulletList';
  };
  attributes: {
    heading: Schema.Attribute.String;
    items: Schema.Attribute.Component<'sections.bullet-item', true>;
  };
}

export interface SectionsFaqItem extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_items';
  info: {
    displayName: 'FAQItem';
    icon: 'bulletList';
  };
  attributes: {
    answer: Schema.Attribute.Text;
    question: Schema.Attribute.String;
  };
}

export interface SectionsFaqSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_faq_sections';
  info: {
    displayName: 'FAQSection';
    icon: 'bulletList';
  };
  attributes: {
    faqs: Schema.Attribute.Component<'sections.faq-item', true>;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsProcessStep extends Struct.ComponentSchema {
  collectionName: 'components_sections_process_steps';
  info: {
    displayName: 'ProcessStep';
    icon: 'bulletList';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsProcessStepsSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_process_steps_sections';
  info: {
    displayName: 'ProcessStepsSection';
    icon: 'bulletList';
  };
  attributes: {
    heading: Schema.Attribute.String;
    steps: Schema.Attribute.Component<'sections.process-step', true>;
  };
}

export interface SectionsRichTextSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_rich_text_sections';
  info: {
    displayName: 'RichTextSection';
    icon: 'bulletList';
  };
  attributes: {
    content: Schema.Attribute.Blocks;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsShowcaseSection extends Struct.ComponentSchema {
  collectionName: 'components_sections_showcase_sections';
  info: {
    displayName: 'ShowcaseSection';
  };
  attributes: {
    before_after: Schema.Attribute.Component<'shared.before-after-block', true>;
    cta_link: Schema.Attribute.String;
    cta_text: Schema.Attribute.String;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String;
    is_slide: Schema.Attribute.Boolean &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<false>;
  };
}

export interface SharedBeforeAfterBlock extends Struct.ComponentSchema {
  collectionName: 'components_shared_before_after_blocks';
  info: {
    displayName: 'BeforeAfterBlock';
    icon: 'bulletList';
  };
  attributes: {
    affter_alt: Schema.Attribute.String;
    after_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    before_alt: Schema.Attribute.String;
    before_image: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    caption: Schema.Attribute.String;
    description: Schema.Attribute.String;
    link_url: Schema.Attribute.String;
  };
}

export interface SharedCoreServiceLink extends Struct.ComponentSchema {
  collectionName: 'components_shared_core_service_links';
  info: {
    displayName: 'CoreServiceLink';
  };
  attributes: {
    short_description: Schema.Attribute.String;
    slug: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    displayName: 'SEO';
    icon: 'apps';
  };
  attributes: {
    canonical: Schema.Attribute.String;
    description: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blog.blog-author-section': BlogBlogAuthorSection;
      'blog.blog-content-section': BlogBlogContentSection;
      'blog.blog-faq-section': BlogBlogFaqSection;
      'blog.blog-hero-section': BlogBlogHeroSection;
      'blog.blog-index-layout-section': BlogBlogIndexLayoutSection;
      'blog.blog-table-of-contents-section': BlogBlogTableOfContentsSection;
      'blog.blog-toc-item': BlogBlogTocItem;
      'blog.faq-item': BlogFaqItem;
      'blog.gallery-section': BlogGallerySection;
      'blog.image-section': BlogImageSection;
      'blog.quote-section': BlogQuoteSection;
      'blog.table-section': BlogTableSection;
      'blog.text-section': BlogTextSection;
      'blog.video-section': BlogVideoSection;
      'home.blog-highlight-section': HomeBlogHighlightSection;
      'home.bullet': HomeBullet;
      'home.hero-slide': HomeHeroSlide;
      'home.hero-slider-section': HomeHeroSliderSection;
      'home.partner': HomePartner;
      'home.partners-section': HomePartnersSection;
      'home.service-card': HomeServiceCard;
      'home.service-list-section': HomeServiceListSection;
      'home.testimonial': HomeTestimonial;
      'home.testimonial-section': HomeTestimonialSection;
      'home.try-for-free-section': HomeTryForFreeSection;
      'home.why-choose-us-item': HomeWhyChooseUsItem;
      'home.why-choose-us-section': HomeWhyChooseUsSection;
      'sections.audience-item': SectionsAudienceItem;
      'sections.audience-section': SectionsAudienceSection;
      'sections.bullet-item': SectionsBulletItem;
      'sections.bullet-list-section': SectionsBulletListSection;
      'sections.faq-item': SectionsFaqItem;
      'sections.faq-section': SectionsFaqSection;
      'sections.process-step': SectionsProcessStep;
      'sections.process-steps-section': SectionsProcessStepsSection;
      'sections.rich-text-section': SectionsRichTextSection;
      'sections.showcase-section': SectionsShowcaseSection;
      'shared.before-after-block': SharedBeforeAfterBlock;
      'shared.core-service-link': SharedCoreServiceLink;
      'shared.seo': SharedSeo;
    }
  }
}
