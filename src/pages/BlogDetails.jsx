import React, { useState, useEffect } from "react";
import { Box, Typography, Card, CardMedia, CardContent, Button, Paper, Avatar, Grid, TextField,} from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faArrowLeft } from "@fortawesome/free-solid-svg-icons";


const BlogPage = () => {
  const [visibleCount, setVisibleCount] = useState(6);
  const [showCategories, setShowCategories] = useState(false);
  const [view, setView] = useState("list"); 
  const [selected, setSelected] = useState(null); 
  const [commentsByKey, setCommentsByKey] = useState({}); // { key: [ {name, text, date} ] }

  // blog posts (masonry)

  const blogs = [
    {
      key: "adventure",
      image:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/blog-img-3.jpg",
      title: "Adventure Is Here",
      category: "Adventure",
      excerpt:
        "Si elit omnes impedit ius, vel et hinc agam fabulas. Ut audiam invenire iracundia vim.",
      date: "September 11, 2017",
      comments: 2,
    },
    {
      key: "food",
      image:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2016/12/blog-img-5.jpg",
      title: "Inspired By Food",
      category: "Food",
      excerpt: "Every dish is a journey — a blend of culture and passion.",
      date: "December 3, 2016",
      comments: 4,
    },
    {
      key: "travel",
      image:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/blog-img-1.jpg",
      title: "Time To Travel",
      category: "Travel",
      excerpt:
        "Travel opens your eyes, fills your soul, and reminds you the world is wide.",
      date: "December 4, 2016",
      comments: 3,
    },
    {
      key: "summer",
      image:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/blog-img-2.jpg",
      title: "Summer Vibes",
      category: "Summer",
      excerpt: "Sunshine, beaches, and long days — summer is a state of mind.",
      date: "July 10, 2018",
      comments: 1,
    },
    {
      key: "oldtown",
      image:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/08/blog-img-6.jpg",
      title: "Old Town",
      category: "City",
      excerpt: "Every brick has a story — the charm of the old never fades.",
      date: "Nov 25, 2016",
      comments: 2,
    },
    {
      key: "photography",
      image:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/blog-img-9.jpg",
      title: "Blue Is My Color",
      category: "Photography",
      excerpt: "Blue whispers calmness and inspires clarity.",
      date: "Oct 30, 2016",
      comments: 3,
    },
    // additional placeholders
    {
      key: "murals",
      image:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/08/blog-img-8.jpg",
      title: "Charming Murals",
      category: "Art",
      excerpt: "Walls speak louder when painted with imagination.",
      date: "Nov 7, 2016",
      comments: 2,
    },
    
  ];

  // categories for animated scroller 
  const categories = [
    {
      key: "Adventure",
      image:
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
      title: "Adventure",
    },
    {
      key: "Food",
      image:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      title: "Food",
    },
    {
      key: "Travel",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
      title: "Travel",
    },
    {
      key: "Summer",
      image:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/blog-img-2.jpg",
      title: "Summer",
    },
  ];

  // details data
  const details = {
    Adventure: {
      hero:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/blog-img-3.jpg",
      title: "Adventure Is Here",
      gallery: [
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
        "https://th.bing.com/th/id/OIP.8lp5InSedOaKjj3lIF0TKAHaE8?w=239&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=80",
        "https://th.bing.com/th/id/OIP.uA93H5inMaXGZp7jGYJJ_AHaEO?w=320&h=182&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      ],
      goodToKnow: {
        Country: "Adventureland",
        Visa: "No visa required",
        Language: "English / Local dialects",
        Currency: "Adventure Coins (ADC)",
        Area: "Varies",
      },
      majorItems: [
        { title: "Cliffs", img: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=400&q=80" },
        { title: "Trails", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80" },
        { title: "Camps", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=80" },
        { title: "Canyons", img: "https://th.bing.com/th/id/OIP.t5d33CCiohW7tnUNUfPEjQHaJQ?w=79&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },
      ],
      about:
        "This destination offers a mix of rugged trails, stunning viewpoints, and adrenaline-pumping activities — perfect for short trips or extended expeditions.",
      author: {
        name: "Nancy Cruz",
        avatar: "https://randomuser.me/api/portraits/women/44.jpg",
        bio: "Traveler, writer, and coffee lover. I share practical tips and stories from the road.",
      },
    },

    Food: {
      hero:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2016/12/blog-img-5.jpg",
      title: "Inspired By Food",
      gallery: [
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1478144592103-25e218a04891?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      ],
      goodToKnow: {
        Country: "Foodistan",
        Visa: "Visitors welcome",
        Language: "Multiple local languages",
        Currency: "Local Currency",
        Area: "Urban & rural",
      },
      majorItems: [
        { title: "Street Food", img: "https://www.bing.com/th/id/OIP.7Kt6hIUDZyP6sl_4L9y6oAHaE8?w=248&h=211&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2" },
        { title: "Markets", img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80" },
        { title: "Fine Dining", img: "https://th.bing.com/th/id/OIP.5UEtSmuDbHCsWm0NhqrVyAHaE7?w=255&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" },
        { title: "Desserts", img: "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=crop&w=400&q=80" },
      ],
      about:
        "A culinary playground where spice, texture, and tradition combine to create unforgettable meals and memories.",
      author: {
        name: "Chef Marco",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        bio: "Food journalist and recipe tinkerer. I love street food and tiny cafés.",
      },
    },

    Travel: {
      hero:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/blog-img-1.jpg",
      title: "Time To Travel",
      gallery: [
        "https://th.bing.com/th/id/OIP.RNCQyNWNTaFBeT0yK7wH_gHaE8?w=248&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        "https://th.bing.com/th/id/OIP.mK6cdKzi2MAAahJ8_gQyEgHaE7?w=233&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        "https://th.bing.com/th/id/OIP.nz6D-hX-hfeTLtT4z-fOeQHaEK?w=329&h=185&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
        "https://th.bing.com/th/id/OIP.SmiQ7FLGvTdJ5QDesZJRTwHaEu?w=291&h=186&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3",
      ],
      goodToKnow: {
        Country: "Wanderland",
        Visa: "Check local rules",
        Language: "Varied",
        Currency: "Local currencies",
        Area: "Global",
      },
      majorItems: [
        { title: "Cities", img: "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?auto=format&fit=crop&w=400&q=80" },
        { title: "Beaches", img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=400&q=80" },
        { title: "Mountains", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80" },
        { title: "Road Trips", img: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=400&q=80" },
      ],
      about:
        "Travel changes you — small towns and big cities, nature and culture, short trips and long journeys shape stories for a lifetime.",
      author: {
        name: "James Fisher",
        avatar: "https://randomuser.me/api/portraits/men/47.jpg",
        bio: "Photographer and travel writer. I map tiny corners and big adventures.",
      },
    },

    Summer: {
      hero:
        "https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/blog-img-2.jpg",
      title: "Summer Vibes",
      gallery: [
        "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=800&q=80",
      ],
      goodToKnow: {
        Country: "Sunny Isles",
        Visa: "Temporary visits welcome",
        Language: "Main language + tourism",
        Currency: "Tourist tokens",
        Area: "Coastal & inland",
      },
      majorItems: [
        { title: "Beaches", img: "https://images.unsplash.com/photo-1493558103817-58b2924bce98?auto=format&fit=crop&w=400&q=80" },
        { title: "Festivals", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=80" },
        { title: "Pools", img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" },
        { title: "Sunsets", img: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80" },
      ],
      about:
        "Summer is long days, bright skies, and lazy afternoons—perfect for beach hops and festival nights.",
      author: {
        name: "Sunny Day",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        bio: "Sun-chaser and festival photographer. I chase light and warm places.",
      },
    },
  };

  // show categories after user loads enough posts
  useEffect(() => {
    if (visibleCount >= 6) setShowCategories(true);
  }, [visibleCount]);

  // handle Load More
  const handleLoadMore = () => {
    setVisibleCount((p) => Math.min(blogs.length, p + 3));
  };

  // open details view by key (either blog.key or category key)
  const openDetails = (key) => {
    setSelected(key);
    setView("details");

    // ensure comments initialised
    if (!commentsByKey[key]) {
      setCommentsByKey((prev) => ({ ...prev, [key]: [] }));
    }

    // smooth scroll to top of details area after render
    setTimeout(() => {
      const topEl = document.getElementById("details-top");
      if (topEl) topEl.scrollIntoView({ behavior: "smooth" });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    }, 150);
  };

  // add comment handler
  const handleAddComment = (key, name, text) => {
    if (!name || !text) return;
    const newComment = {
      name,
      text,
      date: new Date().toLocaleString(),
    };
    setCommentsByKey((prev) => {
      const list = prev[key] ? [...prev[key], newComment] : [newComment];
      return { ...prev, [key]: list };
    });
  };

  // go back from details to list
  const goBack = () => {
    setView("list");
    setSelected(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // details data resolution
  const selectedDetails = selected ? details[selected] || details[selected?.toString()] : null;

  return (
    <Box sx={{ bgcolor: "#f4f6f8", pb: 10 }}>
      {/* HERO */}
      <Box
        sx={{
          height: { xs: "38vh", md: "52vh" },
          backgroundImage: `url("https://setsail.qodeinteractive.com/wp-content/uploads/2018/09/blog-title-img-2.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#fff",
        }}
      >
        <Typography variant="h3" sx={{ fontWeight: 800, textShadow: "0 6px 24px rgba(0,0,0,0.45)" }}>
          Blog Masonry & Details
        </Typography>
      </Box>

      {/* LIST VIEW */}
      {view === "list" && (
        <Paper
          elevation={10}
          sx={{
            maxWidth: 1150,
            mx: "auto",
            mt: -9,
            borderRadius: 3,
            p: { xs: 3, md: 5 },
            position: "relative",
            overflow: "visible",
          }}
        >
          {/* Masonry column layout */}
          <Box sx={{ columnCount: { xs: 1, sm: 2, md: 3 }, columnGap: 3 }}>
            {blogs.slice(0, visibleCount).map((b) => (
              <Card
                key={b.key}
                onClick={() => openDetails(b.key)}
                sx={{
                  display: "inline-block",
                  width: "100%",
                  mb: 3,
                  cursor: "pointer",
                  borderRadius: 2,
                  overflow: "hidden",
                  boxShadow: "0 10px 30px rgba(2,6,23,0.06)",
                  transition: "transform .25s ease",
                  ":hover": { transform: "translateY(-6px)" },
                }}
              >
                <CardMedia component="img" height="200" image={b.image} />
                <CardContent>
                  <Typography variant="h6" sx={{ fontWeight: 700 }}>
                    {b.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {b.excerpt}
                  </Typography>
                  <Typography variant="caption" color="text.secondary" sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                    <FontAwesomeIcon icon={faComment} style={{ color: "#00a8b5" }} /> {b.comments} Comments • {b.date}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>

          {/* Load More */}
          {visibleCount < blogs.length && (
            <Box sx={{ textAlign: "center", mt: 4 }}>
              <Button
                onClick={handleLoadMore}
                variant="contained"
                sx={{
                  background: "#00a8b5",
                  px: 6,
                  py: 1.2,
                  borderRadius: 6,
                  textTransform: "none",
                  "&:hover": { background: "#008f99" },
                }}
              >
                Load More
              </Button>
            </Box>
          )}

          {/* Animated Categories scroller */}
          {showCategories && (
            <Box sx={{ mt: 6, overflow: "hidden" }}>
              <Box
                sx={{
                  display: "inline-flex",
                  gap: 2,
                  px: 1,
                  animation: "scrollLR 28s linear infinite",
                  "@keyframes scrollLR": {
                    "0%": { transform: "translateX(0)" },
                    "100%": { transform: "translateX(-50%)" },
                  },
                }}
              >
                {[...categories, ...categories].map((c, i) => (
                  <Card
                    key={i + "_" + c.key}
                    onClick={() => openDetails(c.key)}
                    sx={{
                      minWidth: 280,
                      borderRadius: 2,
                      cursor: "pointer",
                      overflow: "hidden",
                      boxShadow: "0 6px 20px rgba(2,6,23,0.06)",
                      transition: "transform .2s",
                      ":hover": { transform: "translateY(-6px)" },
                    }}
                  >
                    <CardMedia component="img" height="120" image={c.image} />
                    <Box sx={{ p: 2 }}>
                      <Typography fontWeight={700}>{c.title}</Typography>
                    </Box>
                  </Card>
                ))}
              </Box>
            </Box>
          )}
        </Paper>
      )}

      {/* DETAILS VIEW */}
      {view === "details" && selected && selectedDetails && (
        <Box id="details-top" sx={{ maxWidth: 1100, mx: "auto", mt: -8, mb: 8 }}>
          {/* Back button */}
          <Box sx={{ display: "flex", justifyContent: "flex-start", mt: 2 }}>
            <Button
              onClick={goBack}
              startIcon={<FontAwesomeIcon icon={faArrowLeft} />}
              sx={{ textTransform: "none" }}
            >
              Back to Blog
            </Button>
          </Box>

          {/* Card container */}
          <Paper elevation={6} sx={{ p: { xs: 3, md: 5 }, borderRadius: 3 }}>
            {/* Hero image & Title */}
            <Box>
              <CardMedia
                component="img"
                image={selectedDetails.hero}
                sx={{ borderRadius: 2, height: { xs: 220, md: 380 }, objectFit: "cover", mb: 3 }}
              />
              <Typography variant="h4" sx={{ fontWeight: 800, mb: 1 }}>
                {selectedDetails.title}
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 3 }}>
                <em>{selectedDetails.about.slice(0, 120)}...</em>
              </Typography>
            </Box>

            <Grid container spacing={3}>
              {/* Left Column: Gallery + About */}
              <Grid item xs={12} md={8}>
                {/* Gallery */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    Gallery
                  </Typography>
                  <Grid container spacing={2}>
                    {selectedDetails.gallery.map((g, i) => (
                      <Grid item xs={6} sm={3} key={i}>
                        <Box
                          sx={{
                            height: 100,
                            borderRadius: 2,
                            overflow: "hidden",
                            boxShadow: "0 6px 20px rgba(2,6,23,0.06)",
                          }}
                        >
                          <CardMedia component="img" image={g} sx={{ height: "100%", objectFit: "cover" }} />
                        </Box>
                      </Grid>
                    ))}
                  </Grid>
                </Box>

                {/* About */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    About {selectedDetails.title.split(" ")[0]}
                  </Typography>
                  <Typography color="text.secondary">{selectedDetails.about}</Typography>
                </Box>

                {/* Author */}
                <Paper sx={{ p: 2, borderRadius: 2, mb: 3 }}>
                  <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
                    <Avatar src={selectedDetails.author.avatar} sx={{ width: 72, height: 72 }} />
                    <Box>
                      <Typography sx={{ fontWeight: 700 }}>{selectedDetails.author.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {selectedDetails.author.bio}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>

                {/* Comments list */}
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    Comments ({commentsByKey[selected] ? commentsByKey[selected].length : 0})
                  </Typography>
                  <Box>
                    {(commentsByKey[selected] || []).map((c, idx) => (
                      <Paper key={idx} sx={{ p: 2, mb: 2 }}>
                        <Box sx={{ display: "flex", gap: 2 }}>
                          <Avatar>{c.name?.[0] || "U"}</Avatar>
                          <Box>
                            <Typography sx={{ fontWeight: 700 }}>{c.name}</Typography>
                            <Typography variant="body2" color="text.secondary">
                              {c.text}
                            </Typography>
                            <Typography variant="caption" color="text.secondary">
                              {c.date}
                            </Typography>
                          </Box>
                        </Box>
                      </Paper>
                    ))}
                    {/* sample default comments if none */}
                    {(commentsByKey[selected] || []).length === 0 && (
                      <Paper sx={{ p: 2, mb: 2 }}>
                        <Typography color="text.secondary">No comments yet — be the first to post.</Typography>
                      </Paper>
                    )}
                  </Box>
                </Box>

                {/* Post a comment form */}
                <Paper sx={{ background: "#00a8b5", p: 3, borderRadius: 2 }}>
                  <Typography variant="h6" sx={{ color: "#fff", fontWeight: 700, mb: 2 }}>
                    Post a Message
                  </Typography>

                  <CommentForm
                    onSubmit={(name, text) => {
                      handleAddComment(selected, name, text);
                    }}
                  />
                </Paper>
              </Grid>

              {/* Right Column: Good to know + Major Cities */}
              <Grid item xs={12} md={4}>
                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    Good to Know
                  </Typography>
                  <Paper sx={{ p: 2, borderRadius: 2, background: "#00a8b5", color: "#fff" }}>
                    <Typography sx={{ fontWeight: 700, mb: 1 }}>Helpful facts</Typography>
                    <Box sx={{ fontSize: 14 }}>
                      {Object.entries(selectedDetails.goodToKnow).map(([k, v]) => (
                        <Box key={k} sx={{ mb: 1 }}>
                          <strong>{k}:</strong> <span>{v}</span>
                        </Box>
                      ))}
                    </Box>
                  </Paper>
                </Box>

                <Box sx={{ mb: 3 }}>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>
                    Highlights
                  </Typography>
                  <Paper sx={{ p: 2, borderRadius: 2 }}>
                    <Grid container spacing={1}>
                      {selectedDetails.majorItems.map((m, i) => (
                        <Grid item xs={6} key={i}>
                          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
                            <Box sx={{ width: 64, height: 48, borderRadius: 1, overflow: "hidden" }}>
                              <CardMedia component="img" image={m.img} sx={{ width: "100%", height: "100%", objectFit: "cover" }} />
                            </Box>
                            <Box>
                              <Typography sx={{ fontSize: 13, fontWeight: 700 }}>{m.title}</Typography>
                            </Box>
                          </Box>
                        </Grid>
                      ))}
                    </Grid>
                  </Paper>
                </Box>

             
              </Grid>
            </Grid>
          </Paper>
        </Box>
      )}
    </Box>
  );
};

/** Small comment form component hidden in the same file for simplicity */
const CommentForm = ({ onSubmit = () => {} }) => {
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  return (
    <Box component="form" onSubmit={(e) => { e.preventDefault(); if (!name || !text) return; onSubmit(name, text); setName(""); setText(""); }}>
      <TextField value={text} onChange={(e) => setText(e.target.value)} placeholder="Comment" multiline rows={4} fullWidth sx={{ mb: 1, background: "#fff", borderRadius: 1 }} />
      <TextField value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" fullWidth sx={{ mb: 1, background: "#fff", borderRadius: 1 }} />
      <Box sx={{ display: "flex", gap: 1 }}>
        <Button type="submit" variant="contained" sx={{ background: "#fff", color: "#00a8b5", "&:hover": { background: "#e6f7f7" } }}>
          Submit
        </Button>
        <Button type="button" variant="outlined" sx={{ color: "#fff", borderColor: "rgba(255,255,255,0.25)" }} onClick={() => { setName(""); setText(""); }}>
          Clear
        </Button>
      </Box>
    </Box>
  );
};

export default BlogPage;