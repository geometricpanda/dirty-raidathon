provider "google" {
  credentials = file(".credentials/credential.json")
  project     = "geometricpanda"
  region      = "europe-west2"
  zone        = "europe-west2-a"
}

module "infra" {
  source = "./terraform"
}
