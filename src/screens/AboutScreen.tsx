"use client";

import { Star, Quote } from "lucide-react";
import { HeroBand } from "@/components/HeroBand";
import { PullQuote } from "@/components/PullQuote";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionHeading } from "@/components/SectionHeading";
import { SectionDivider } from "@/components/SectionDivider";
import { Reveal } from "@/components/Reveal";
import { Button } from "@/components/Button";
import { CTABanner } from "@/components/CTABanner";
import { interiorFeatures } from "@/data/amenities";
import { site } from "@/data/site";
import { useI18n } from "@/i18n/provider";

const stats = [
  { value: "200+", key: "statDishes" },
  { value: "22", key: "statCategories" },
  { value: "5-7", key: "statGuests" },
  { value: "12%", key: "statService" },
] as const;

const reviews = [
  {
    name: "Айгерім К.",
    text: {
      kk: "Өте дәмді тағамдар, балаларға арналған бөлме бар — бүкіл отбасымен келдік, бәрі ұнады!",
      ru: "Очень вкусная еда, есть детская комната — пришли всей семьёй, всё понравилось!",
      en: "Delicious food, there's a kids' room — we came with the whole family and loved it!",
    },
    rating: 5,
  },
  {
    name: "Марат Т.",
    text: {
      kk: "Банкетті осында өткіздік — сеттер керемет, қызмет көрсету деңгейі жоғары. Рахмет!",
      ru: "Проводили банкет здесь — сеты отличные, обслуживание на высоте. Спасибо!",
      en: "We held a banquet here — the sets were excellent, service top-notch. Thank you!",
    },
    rating: 5,
  },
  {
    name: "Диана Р.",
    text: {
      kk: "Жайлы атмосфера, тамаша интерьер. Форель мен стейк — ең сүйікті тағамдарымыз болды.",
      ru: "Уютная атмосфера, красивый интерьер. Форель и стейк стали нашими фаворитами.",
      en: "Cosy atmosphere, beautiful interior. The trout and steak became our favourites.",
    },
    rating: 5,
  },
  {
    name: "Бекзат А.",
    text: {
      kk: "Досыма туған күнін осында тойлаттық. VIP-кабина, палау, тай қуырдақ — бәрі тамаша болды!",
      ru: "Праздновали день рождения друга тут. VIP-кабина, плов, тай куырдак — всё было на высшем уровне!",
      en: "Celebrated a friend's birthday here. VIP cabin, pilaf, tai kuyrdak — everything was top level!",
    },
    rating: 5,
  },
] as const;

export function AboutScreen() {
  const { t, lang } = useI18n();

  return (
    <>
      <HeroBand
        eyebrow={t("about.heroEyebrow")}
        title={t("about.heroTitle")}
        subtitle={t("about.heroSubtitle")}
        imageLabel={t("about.heroImage")}
      />

      {/* Welcome pull-quote (verbatim RU welcome message) */}
      <section className="section">
        <div className="container-page">
          <Reveal>
            <PullQuote cite={t("about.quoteCite")}>{site.welcome}</PullQuote>
          </Reveal>
        </div>
      </section>

      {/* Statistics */}
      <section className="section bg-teal-900 text-white">
        <div className="container-page">
          <Reveal className="mb-10">
            <SectionHeading
              eyebrow={t("about.statsEyebrow")}
              title={t("about.statsTitle")}
            />
          </Reveal>
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.key} delay={i * 80}>
                <div className="text-center">
                  <span className="block font-display text-4xl font-bold text-gold-400 sm:text-5xl">
                    {s.value}
                  </span>
                  <span className="mt-2 block text-sm text-white/75 sm:text-base">
                    {t(`about.${s.key}`)}
                  </span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story block */}
      <section className="section bg-teal-100/50">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <Reveal>
              <SectionHeading
                eyebrow={t("about.storyEyebrow")}
                title={t("about.storyTitle")}
                className="mb-6"
              />
              <div className="flex flex-col gap-4 text-body-lg text-charcoal-900/80">
                <p>{t("about.storyP1")}</p>
                <p>{t("about.storyP2")}</p>
              </div>
            </Reveal>
            <SectionDivider className="mt-10" />
          </div>
        </div>
      </section>

      {/* Interior features */}
      <section className="section">
        <div className="container-page">
          <Reveal className="mb-10">
            <SectionHeading
              eyebrow={t("about.intEyebrow")}
              title={t("about.intTitle")}
              intro={t("about.intIntro")}
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {interiorFeatures.map((f, i) => (
              <Reveal key={f.key} delay={i * 60} className="h-full">
                <FeatureCard
                  icon={f.icon}
                  title={t(`amenities.${f.key}T`)}
                  description={t(`amenities.${f.key}D`)}
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="section bg-cream-50">
        <div className="container-page">
          <Reveal className="mb-10">
            <SectionHeading
              eyebrow={t("about.reviewsEyebrow")}
              title={t("about.reviewsTitle")}
              intro={t("about.reviewsIntro")}
            />
          </Reveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {reviews.map((r, i) => (
              <Reveal key={r.name} delay={i * 80} className="h-full">
                <article className="flex h-full flex-col rounded-card bg-white p-5 shadow-card">
                  <Quote
                    className="mb-3 h-6 w-6 text-gold-600/40"
                    aria-hidden="true"
                  />
                  <p className="flex-1 text-sm leading-relaxed text-charcoal-900/80">
                    {r.text[lang]}
                  </p>
                  <div className="mt-4 flex items-center justify-between border-t border-teal-900/10 pt-3">
                    <span className="text-sm font-semibold text-teal-900">
                      {r.name}
                    </span>
                    <div className="flex gap-0.5" aria-label={`${r.rating}/5`}>
                      {Array.from({ length: r.rating }, (_, j) => (
                        <Star
                          key={j}
                          className="h-3.5 w-3.5 fill-gold-600 text-gold-600"
                        />
                      ))}
                    </div>
                  </div>
                  <span className="mt-1 text-xs text-charcoal-900/50">
                    {t("about.reviewSource")}
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Cuisine block */}
      <section className="section bg-teal-100/50">
        <div className="container-page">
          <Reveal className="mx-auto max-w-3xl text-center">
            <SectionHeading
              eyebrow={t("about.cuisEyebrow")}
              title={t("about.cuisTitle")}
              intro={t("about.cuisIntro")}
              className="mb-8"
            />
            <Button href="/menu" variant="primary" size="lg">
              {t("about.cuisCta")}
            </Button>
          </Reveal>
        </div>
      </section>

      <CTABanner
        title={t("cta.aboutTitle")}
        text={t("cta.aboutText")}
        cta={t("common.book")}
        secondary={{ href: "/gallery", label: t("cta.galleryCta") }}
      />
    </>
  );
}
